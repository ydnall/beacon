import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ data }) => {
	return {
		title: 'Register',
		form: data.form
	};
};
