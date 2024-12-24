<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import { User, Settings, LogOut, Bell, LoaderCircleIcon } from 'lucide-svelte';
	import { authClient } from '$lib/client';
	import { goto } from '$app/navigation';
	import ThemeSwitcher from './theme-switcher.svelte';
	import UserAvatar from './user-avatar.svelte';

	let isLoading = $state(false);

	const handleSignOut = async () => {
		isLoading = true;

		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						goto('/login');
					}
				}
			});
		} catch (error) {
			console.error('Sign out failed:', error);
		}
	};
</script>

<header class="sticky top-0 z-50 w-full border-b">
	<div class="flex h-14 items-center px-4">
		<Sidebar.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })} />
		<div class="ml-auto flex items-center space-x-2">
			<ThemeSwitcher />
			<Button variant="outline" size="icon">
				<Bell />
			</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					aria-label="User menu"
				>
					<Button variant="outline" size="icon">
						<Settings />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56" align="end">
					<DropdownMenu.Group>
						<DropdownMenu.GroupHeading>
							<UserAvatar />
						</DropdownMenu.GroupHeading>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							<User />
							<a href="/dashboard/profile">Profile</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<Settings />
							<a href="/dashboard/settings">Settings</a>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item onclick={handleSignOut} disabled={isLoading}>
						{#if isLoading}
							<LoaderCircleIcon class="animate-spin" />
						{:else}
							<LogOut />
						{/if}
						<span>Sign out</span>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
