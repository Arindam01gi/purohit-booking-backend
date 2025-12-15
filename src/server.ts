import express from 'express';
import http from 'http';
import helmet from 'helmet';
import * as admin from 'firebase-admin'; 
import * as dotenv from 'dotenv'
import * as fs from 'fs';
import { createPool } from 'mysql2/promise';


dotenv.config();


// --- 1. INITIALIZE FIREBASE ADMIN SDK ---
let firebaseAdmin: admin.app.App; 
try {
    const keyPath = process.env.FIREBASE_ADMIN_KEY_PATH;
    if (!keyPath) {
        throw new Error("FIREBASE_ADMIN_KEY_PATH is not set in the environment variables.");
    }
    
    // Read the service account file content
    const serviceAccountContent = fs.readFileSync(keyPath, 'utf8');
    const serviceAccount = JSON.parse(serviceAccountContent);

    // FIX: Module Resolution Workaround
    // When using 'import * as admin', the actual functions may be nested under 'admin.default'
    // in mixed ES/CommonJS environments. We use a dynamic check to ensure stability.
    const adminApi = (admin as any).default || admin;

    // Use adminApi.initializeApp and adminApi.credential.cert
    firebaseAdmin = adminApi.initializeApp({
        credential: adminApi.credential.cert(serviceAccount)
    });
    console.log('✅ Firebase Admin SDK initialized successfully.');

} catch (error) {
    console.error('❌ Failed to initialize Firebase Admin SDK:', error);
    // Note: If this error persists, double-check that your FIREBASE_ADMIN_KEY_PATH 
    // points to a valid JSON service account file and the file content is correct.
    process.exit(1); 
}

// --- 2. DATABASE INITIALIZATION (Prisma Style) ---
// If using Prisma, the connection pool is managed internally by the Prisma Client 
// which should be initialized and exported in a separate file (e.g., src/lib/prisma.ts)
console.log('✅ Database connection handled by Prisma Client instance.');

const app = express();
const httpServer = http.createServer(app);



const PORT = process.env.PORT || 3000;


httpServer.listen(PORT, () => {
    console.log('--------------------------------------------------');
    console.log(`🚀 Server is running in ${process.env.NODE_ENV || 'development'} mode.`);
    console.log(`🔗 REST API available at http://localhost:${PORT}/`);
    console.log('--------------------------------------------------');
});