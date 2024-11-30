<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { loginSchema, type LoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema)
	});

	const { form: loginData, enhance } = form;
</script>

<form method="POST" use:enhance class="flex w-full flex-col">
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Input placeholder="name@example.com" {...props} bind:value={$loginData.email} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Sign In with Email</Form.Button>
</form>
