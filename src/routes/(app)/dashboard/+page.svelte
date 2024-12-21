<script lang="ts">
	import { Bell, Settings, Search, LogOut } from 'lucide-svelte';
	import { Card } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	import { authClient } from '$lib/client';
	const session = authClient.useSession();

	// User information
	let user = $state({
		name: 'John Doe',
		email: 'john@example.com',
		avatar: '/beacon.svg'
	});

	// Search query
	let searchQuery = $state('');
</script>

<div class="flex min-h-screen w-full bg-background">
	<!-- Sidebar -->
	<Sidebar {user} />

	<!-- Main Content -->
	<main class="flex-1 p-6">
		<!-- Header -->
		<header class="mb-8 flex items-center justify-between">
			<div class="max-w-md flex-1">
				<div class="relative">
					<Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
					<Input bind:value={searchQuery} placeholder="Search..." class="pl-8" />
				</div>
			</div>
			{#if $session.data}
				<p>
					User: {$session?.data?.user.name} |
					Email: {$session?.data?.user.email}
				</p>
			{/if}
			<div class="flex items-center gap-3">
				<Button variant="ghost" size="icon">
					<Bell class="size-4" />
				</Button>
				<Button variant="ghost" size="icon">
					<Settings class="size-4" />
				</Button>
				<ThemeSwitcher />
				<div>
					{#if $session.data}
						<div class="flex items-center gap-3">
							<Button
								variant="outline"
								onclick={async () => {
									await authClient.signOut();
								}}
								class="flex items-center"
								href="/"
							>
								<LogOut class="size-4"/> Logout 
							</Button>
						</div>
					{/if}
				</div>
			</div>
		</header>

		<!-- Stats Cards -->
		<Stats />

		<!-- Recent Activity -->
		<Card class="mt-8 p-6">
			<h2 class="mb-4 text-lg font-semibold">Recent Activity</h2>
			<div class="text-sm text-muted-foreground">No recent activity to show.</div>
		</Card>
	</main>
</div>
