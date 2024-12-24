<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { authClient } from '$lib/client';

	const session = authClient.useSession();

	$: userInitials =
		$session?.data?.user.name
			?.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase() || '??';
</script>

{#if $session?.data?.user}
	<div class="flex flex-row items-center space-x-2">
		<Avatar.Root class="size-8">
			{#if $session.data.user.image}
				<Avatar.Image
					src={$session.data.user.image}
					alt={$session.data.user.name || 'User Avatar'}
				/>
			{:else}
				<Avatar.Fallback class="font-medium dark:invert">{userInitials}</Avatar.Fallback>
			{/if}
		</Avatar.Root>
		<div>
			<p class="text-sm font-medium">{$session.data.user.name}</p>
			<p class="text-xs text-muted-foreground">{$session.data.user.email}</p>
		</div>
	</div>
{/if}
