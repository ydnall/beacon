<script lang="ts">
    import type { PageData } from './$types';
    import RegisterForm from './RegisterForm.svelte';
    const { data } = $props<{ data: PageData }>();
    import { Button } from '$lib/components/ui/button/index';
</script>

<div class="grid h-screen w-screen grid-cols-2">
    <div class="bg-muted">
        <img src="/lighthouse.jpg" alt="Lighthouse" class="object-cover w-full h-full opacity-90" />
	</div>
    <div class="relative flex flex-col items-center justify-center">
        <Button variant="ghost" href="/login" class="absolute right-4 top-4 md:right-8 md:top-8"
            >Login</Button
        >
        <div class="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
            <div class="flex flex-col gap-2 text-center">
                <img src="/beacon.svg" alt="Beacon" class="mx-auto size-6 dark:invert" />
                <h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
                <p class="text-sm text-muted-foreground">Enter your email below to create your account</p>
            </div>
            <div class="grid gap-6">
                <RegisterForm data={data.form} />
            </div>
            <p class="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our <a
                    class="hover:text-brand underline underline-offset-4"
                    href="/terms">Terms of Service</a
                >
                and
                <a class="hover:text-brand underline underline-offset-4" href="/privacy">Privacy Policy</a>.
            </p>
        </div>
    </div>
</div>