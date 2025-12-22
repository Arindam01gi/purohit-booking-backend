import type { Response, NextFunction } from "express";
import type { CustomRequest } from "../types/index.js";
import { prisma } from '../lib/prisma.js';


/**
 * Protect middleware:
 * 1. Extracts the Bearer token from the Authorization header.
 * 2. Verifies it via Firebase Admin SDK.
 * 3. Maps the Firebase UID to our internal MySQL User ID.
 * 4. Attaches the user profile to req.user.
 */


export const protect = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Authentication required. Missing or malformed token.' })
    }
    const token = authHeader.split('')[1];
    try {
        const decodedToken = await req.firebaseAdmin.auth().verifyIdToken(token!)
        const firebaseUid = decodedToken.uid;


        const dbUser = await prisma.user.findUnique({
            where: { firebase_uid: firebaseUid },
            select: {
                id: true,
                firebase_uid: true,
                email: true,
                role: true
            }
        })

        if (!dbUser) {
            return res.status(401).json({
                message: 'User authenticated via Firebase but not found in local database. Please register.'
            });
        }


        req.user = {
            id: dbUser.id,
            firebase_uid: dbUser.firebase_uid,
            email: dbUser.email,
            role: dbUser.role
        }

        next();

    } catch (error) {
        console.error("Firebase auth error", error)
        res.status(401).json({ message: 'Invalid or expired authentication token.' })
    }
}


/**
 * Role-based authorization middleware.
 * Usage: router.get('/admin-data', protect, restrictTo('admin'), adminController);
 */

export const restrictTo = (...roles: string[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                message: 'You do not have permission to perform this action.'
            });
        }
        next();
    };
}