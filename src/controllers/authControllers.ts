import type { Request, Response } from "express";
import { prisma } from '../lib/prisma.js';
import { SignUpSchema } from "../types/index.js";
import { email, z } from 'zod';
import { use } from "react";


export const registerUser = async (req: Request, res: Response) => {
    try {

        const validatedData = SignUpSchema.parse(req.body);

        const existingUser = await prisma.user.findUnique({
            where: { firebase_uid: validatedData.firebase_uid }
        })

        if (existingUser) {
            res.status(409).json({ message: "User already exists!" })
        }

        const newUser = await prisma.user.create({
            data: {
                firebase_uid: validatedData.firebase_uid,
                email: validatedData.email,
                name: validatedData.name,
                phone_number: validatedData.phone_number,
                role: 'user'
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: true
            }
        })

        return res.status(201).json({
            message: "User created successfully",
            user: newUser
        })



    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: error.issues.map(i => ({ path: i.path, message: i.message }))
            })
        }

        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Internal server error during registration.' });
    }
}

export const fetchProfile = async (req: Request, res: Response) => {

    const authUser = (req as any).user;

    if (!authUser) {
        return res.status(401).json({ message: 'Authentication context missing.' });
    }

    try {

        const userProfile = await prisma.user.findUnique({
            where: { id: authUser.id },
            include: {
                purohitProfile: {
                    select: {
                        city: true,
                        rating: true,
                        is_verified: true,
                        bio: true
                    }
                }
            }
        })

        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found in database.' });
        }

        return res.status(200).json({ 
            message: 'Profile fetched successfully.',
            user: userProfile
        });

    } catch (error) {
        console.error('Error fetching profile:', error);
        return res.status(500).json({ message: 'Internal server error fetching profile.' });
    }
}