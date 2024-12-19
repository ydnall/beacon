<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { registerSchema, type RegisterSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<RegisterSchema>>;

	const form = superForm(data, {
		validators: zodClient(registerSchema)
	});

	const { form: registerData, enhance } = form;
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
					bind:value={$registerData.email}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors class="pb-1 text-xs font-light" />
	</Form.Field>
	<Form.Button>Sign In with Email</Form.Button>
</form>
