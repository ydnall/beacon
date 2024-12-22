import type { PageLoad } from "./$types.js";

export const load: PageLoad = async ({ data }) => {
    return {
        title: "Login",
        form: data.form
    };
};