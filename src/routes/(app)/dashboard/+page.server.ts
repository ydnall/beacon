import { auth } from "$lib/auth";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
 
export const load: PageServerLoad = async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers,
	});
	if (!session) {
		return redirect(302, "/login");
	}
	return session;
}