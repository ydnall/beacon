import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { Resend } from 'resend';
import { magicLink } from 'better-auth/plugins';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';

const db = drizzle(process.env.DATABASE_URL!); // my drizzle instance

// TODO: implement the resend function

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg', // or "mysql", "sqlite"
		schema: {
			user: schema.user,
			session: schema.session,
			account: schema.account,
			verification: schema.verification
		}
	}),
	plugins: [
		magicLink({
			sendMagicLink: async ({ email, token, url }, request) => {
				// TODO: send the magic link to the user with resend
				console.log(`Magic link for ${email}: ${url}`);
			}
		})
	],
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!
		}
	}
});
