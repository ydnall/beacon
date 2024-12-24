<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import { Home, ChevronsUpDown, LogOut, Settings, User, LoaderCircleIcon } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { authClient } from '$lib/client';
	import { goto } from '$app/navigation';
	import UserAvatar from './user-avatar.svelte';

	const menuItems = [
		{
			icon: Home,
			title: 'Home',
			url: '/dashboard'
		},
		{
			icon: Settings,
			title: 'Settings',
			url: '/dashboard/settings'
		}
	];

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

<Sidebar.Root class="z-50">
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each menuItems as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Sidebar.MenuButton
								{...props}
								class="border py-6 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<UserAvatar />
								<ChevronsUpDown class="ml-auto" />
							</Sidebar.MenuButton>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-[--bits-dropdown-menu-anchor-width]">
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
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
