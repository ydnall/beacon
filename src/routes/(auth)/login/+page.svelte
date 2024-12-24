<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from './LoginForm.svelte';
	const { data } = $props<{ data: PageData }>();
	import { Button } from '$lib/components/ui/button/index';
	import { ChevronLeft } from 'lucide-svelte';
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
	<Button variant="ghost" href="/" class="absolute left-4 top-4 md:left-8 md:top-8"
		><ChevronLeft />Back</Button
	>
	<div class="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
		<div class="flex flex-col gap-2 text-center">
			<img src="/beacon.svg" alt="Beacon" class="mx-auto size-6 dark:invert" />
			<h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
			<p class="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
		</div>
		<div class="grid gap-6">
			<LoginForm data={data.form} />
		</div>
		<p class="px-8 text-center text-sm text-muted-foreground">
			<a class="hover:text-brand underline underline-offset-4" href="/register"
				>Don't have an account? Sign Up</a
			>
		</p>
	</div>
</div>
