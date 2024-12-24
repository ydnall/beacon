<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { registerSchema, type RegisterSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { authClient } from '$lib/client';
	import { LoaderCircleIcon, Github } from 'lucide-svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button/index';

	const { data } = $props<{ data: SuperValidated<Infer<RegisterSchema>> }>();

	type AuthMethod = 'email' | 'github' | null;
	let authMethod: AuthMethod = $state(null);

	const form = superForm(data, {
		validators: zodClient(registerSchema),
		resetForm: false,
		onSubmit: async ({ formData }) => {
			authMethod = 'email';

			try {
				await authClient.signIn.magicLink({
					email: formData.get('email') as string,
					callbackURL: '/dashboard'
				});

				toast.message('Magic link sent', {
					description: 'Check your email to sign in'
				});
			} catch (error) {
				console.error('Email sign in failed:', error);
				toast.error('Email sign in failed');
			}
		}
	});

	const handleGitHubLogin = async () => {
		authMethod = 'github';

		try {
			await authClient.signIn.social({
				provider: 'github',
				callbackURL: '/dashboard'
			});
		} catch (error) {
			console.error('GitHub login failed:', error);
			toast.error('GitHub login failed');
		}
	};

	const { form: registerData, enhance } = form;
	const session = authClient.useSession();
</script>

<Toaster position="top-center" richColors />

<form method="POST" use:enhance class="flex w-full flex-col">
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="sr-only">Email</Form.Label>
				<Input
					disabled={!!authMethod}
					type="email"
					spellcheck="false"
					placeholder="name@example.com"
					required
					{...props}
					bind:value={$registerData.email}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors class="pb-1 text-xs font-light" />
	</Form.Field>

	<Form.Button disabled={!!authMethod}>
		{#if authMethod === 'email'}
			<LoaderCircleIcon class="animate-spin" />
		{/if}
		<span>Sign In with Email</span>
	</Form.Button>
</form>

<div class="relative">
	<div class="absolute inset-0 flex items-center">
		<span class="w-full border-t"></span>
	</div>
	<div class="relative flex justify-center text-xs uppercase">
		<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
	</div>
</div>

<Button variant="outline" disabled={!!authMethod} onclick={handleGitHubLogin}>
	{#if authMethod === 'github'}
		<LoaderCircleIcon class="animate-spin" />
	{:else}
		<Github />
	{/if}
	<span>GitHub</span>
</Button>
