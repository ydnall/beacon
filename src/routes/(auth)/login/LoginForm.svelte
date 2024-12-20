<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { loginSchema, type LoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { authClient } from '$lib/client';
	import { LoaderCircleIcon, Github } from 'lucide-svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button/index';

	const { data } = $props<{ data: SuperValidated<Infer<LoginSchema>> }>();

	let loading: boolean = $state(false);
	let emailLoading: boolean = $state(false);
	let githubLoading: boolean = $state(false);

	const form = superForm(data, {
		validators: zodClient(loginSchema),
		resetForm: false,
		onSubmit: async ({ formData }) => {
			try {
				loading = true;
				emailLoading = true;
				await authClient.signIn.magicLink({
					email: formData.get('email') as string,
					callbackURL: '/dashboard',
				});
				toast.message('Magic link sent', {
					description: 'Check your email to sign in',
				});
			} catch (error) {
				console.error('Email sign in failed:', error);
				toast.error('Email sign in failed');
			} finally {
				if (!$session.isPending) {
					emailLoading = false;
				}
			}
		}
	});

	const handleGitHubLogin = async () => {
		try {
			loading = true;
			githubLoading = true;
			await authClient.signIn.social({
				provider: 'github',
				callbackURL: '/dashboard'
			});
		} catch (error) {
			console.error('GitHub login failed:', error);
			toast.error('GitHub login failed');
		} finally {
			if (!$session.isPending) {
				githubLoading = false;
			}
		}
	};

	const { form: loginData, enhance } = form;
	const session = authClient.useSession();
</script>

<Toaster position="top-center" richColors/>

<form method="POST" use:enhance class="flex w-full flex-col">
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="sr-only">Email</Form.Label>
				<Input
					disabled={loading}
					type="email"
					spellcheck="false"
					placeholder="name@example.com"
					required
					{...props}
					bind:value={$loginData.email}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors class="pb-1 text-xs font-light" />
	</Form.Field>
	<Form.Button disabled={loading}>
		{#if emailLoading}
			<LoaderCircleIcon class="size-4 animate-spin" />
		{/if}
		Sign In with Email
	</Form.Button>
</form>

<div class="relative">
	<div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div>
	<div class="relative flex justify-center text-xs uppercase">
		<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
	</div>
</div>

<Button variant="outline" disabled={loading} onclick={handleGitHubLogin}>
	{#if githubLoading}
		<LoaderCircleIcon class="size-4 animate-spin" />
		GitHub
	{:else}
		<Github class="size-4" />
		GitHub
	{/if}
</Button>
