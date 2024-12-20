<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { loginSchema, type LoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { authClient } from '$lib/client';
	import { LoaderCircleIcon } from 'lucide-svelte';

	const { data } = $props<{ data: SuperValidated<Infer<LoginSchema>> }>();

	const form = superForm(data, {
		validators: zodClient(loginSchema)
	});

	const { form: loginData, enhance } = form;

	let loading: boolean = $state(false);

	const handleMagicLink = async () => {
		try {
			loading = true;
			await authClient.signIn.magicLink({
				email: 'user@email.com',
				callbackURL: '/dashboard'
			});
		} catch (error) {
			console.error('Magic link login failed:', error);
		} finally {
			setTimeout(() => {
				loading = false;
			}, 2000);
		}
	};
</script>

<form method="POST" use:enhance class="flex w-full flex-col">
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="sr-only">Email</Form.Label>
				<Input
					type="email"
					spellcheck="false"
					placeholder="name@example.com"
					{...props}
					bind:value={$loginData.email}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors class="pb-1 text-xs font-light" />
	</Form.Field>
	<Form.Button disabled={loading} onclick={handleMagicLink}>
		{#if loading}
			<LoaderCircleIcon class="size-4 animate-spin" />
		{/if}
		Sign In with Email
	</Form.Button>
</form>
