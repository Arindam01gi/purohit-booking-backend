import { prisma } from '../src/lib/prisma.js';
import * as dotenv from 'dotenv';

// Load environment variables (though the client already does this, it's safe here)
dotenv.config();

/**
 * Executes a simple query to verify the database connection and schema access.
 */
async function runConnectionTest() {
    console.log("--- Starting Prisma Database Connection Test ---");

    if (!process.env.DATABASE_URL) {
        console.error("FATAL: DATABASE_URL is not set in your .env file. Please check your setup.");
        return;
    }

    try {
        // Attempt a basic, non-destructive query (counting records in the 'User' model)
        const userCount = await prisma.user.count();

        console.log(`\n✅ SUCCESS: Connection to MySQL database successful.`);
        console.log(`   Client initialized from src/lib/prisma.js is ready.`);
        console.log(`   Found ${userCount} existing records in the 'users' table.`);

    } catch (error) {
        console.error("\n❌ FAILURE: Database connection or query failed.");
        console.error("   Please check the following potential issues:");
        console.error("   1. Is your MySQL database server currently running?");
        console.error("   2. Is the DATABASE_URL environment variable correct and properly formatted?");
        console.error("   3. Have you run 'npm run generate' to generate the client files?");
        console.log("\nDetailed Error for Diagnosis:");
        console.error(error);

    } finally {
        // Ensure the Prisma client disconnects gracefully after the test
        await prisma.$disconnect();
        console.log("\n--- Connection Test Finished. Client Disconnected. ---");
    }
}

// Execute the test
runConnectionTest();