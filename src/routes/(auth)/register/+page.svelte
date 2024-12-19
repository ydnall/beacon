<script lang="ts">
	import type { PageData } from './$types';
	import RegisterForm from './RegisterForm.svelte';
	const { data } = $props<{ data: PageData }>();

	import { Button } from '$lib/components/ui/button/index';

	import { ChevronLeft, Github, LoaderCircleIcon } from 'lucide-svelte';

	import { authClient } from '$lib/client';

	// Loading state
	let loading: boolean = $state(false);

	/** Handle GitHub login button click */
	const handleGitHubLogin = async () => {
		try {
			loading = true;
			await authClient.signIn.social({
				provider: 'github',
				callbackURL: '/dashboard'
			});
		} catch (error) {
			console.error('GitHub login failed:', error);
		} finally {
			setTimeout(() => {
				loading = false;
			}, 2000);
		}
	};
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
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
			<div class="relative">
				<div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
				</div>
			</div>
			<Button variant="outline" disabled={loading} onclick={handleGitHubLogin}>
				{#if loading}
					<LoaderCircleIcon class="size-4 animate-spin" />
					GitHub
				{:else}
					<Github class="size-4" />
					GitHub
				{/if}
			</Button>
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
