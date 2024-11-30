<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from './LoginForm.svelte';
	export let data: PageData;

	import { Button } from '$lib/components/ui/button/index';

	import { ChevronLeft } from 'lucide-svelte';
</script>

<div class="container flex h-screen w-screen flex-col items-center justify-center">
	<Button variant="ghost" href="/" class="absolute left-4 top-4 md:left-8 md:top-8"
		><ChevronLeft class="size-4" />Back</Button
	>
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col text-center gap-2">
			<img src="/beacon.svg" alt="Beacon" class="mx-auto size-6" />
			<h1 class="text-2xl font-semibold tracking-tight">Login to Beacon</h1>
			<p class="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
		</div>
		<div class="grid gap-6">
			<LoginForm data={data.form} />
			<div class="relative">
				<div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
				</div>
			</div>
			<Button variant="outline">GitHub</Button>
		</div>
		<Button variant="link" href="/register" class="text-sm text-muted-foreground hover:text-brand underline underline-offset-4">Don't have an account? Sign Up</Button>
	</div>
</div>
