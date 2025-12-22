import type { Request, Response, NextFunction } from "express";
import type { UserRole } from "../../generated/prisma/enums.js";
import * as admin from "firebase-admin"
import { z, ZodError } from "zod";
import type { ZodTypeAny } from "zod/v3";

export interface AuthUser {
    id: number;
    firebase_uid: string;
    email: string;
    role: UserRole
}


export interface CustomRequest extends Request {
    firebaseAdmin: admin.app.App;
    user?: AuthUser
}


// --- ZOD VALIDATION UTILITY ---

/**
 * Middleware factory to validate request body or query against a Zod schema.
 * We use z.ZodTypeAny to accept any valid Zod schema.
 */
export const Validate = (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {

        try {
            schema.parse(req.body);
            next()
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.issues.map((issue: any) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))

                return res.status(400).json({
                    error: 'Invalid data',
                    details: errorMessages
                });
            }

            res.status(500).json({
                error: " Internal server error"
            })
        }

    }

// --- ZOD SCHEMAS FOR REST INPUTS ---

/**
 * User Registration Schema
 */

export const SignUpSchema = z.object({
    firebase_uid : z.string().min(1,"Firebase uid is required"),
    email : z.string().email("Invalid email format"),
    name: z.string().min(2, 'Name is required'),
    phone_number: z.string().min(10, 'phone no must be atleast 10 digits'),
})

export const ServiceCreateSchema = z.object({
    name : z.string().min(3, 'Service name is required'),
    description: z.string().max(500).optional().nullable(),
    duration_minutes: z.number().int().positive('Duration must be a positive integer'),
    price: z.number().positive('Price must be a positive number'),
})


export const ServiceUpdateSchema = ServiceCreateSchema.partial()