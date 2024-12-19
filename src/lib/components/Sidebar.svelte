<script lang="ts">
	import { Home, Users, FileText, BarChart } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	// Props
	let { user }: { user: { name: string; email: string } } = $props();

	// Navigation items
	const navItems = [
		{ icon: Home, label: 'Dashboard', active: true },
		{ icon: Users, label: 'Users' },
		{ icon: FileText, label: 'Documents' },
		{ icon: BarChart, label: 'Analytics' }
	];
</script>

<aside class="w-64 border-r bg-card px-4 py-6">
	<div class="mb-8 px-2">
		<h1 class="text-xl font-bold">Dashboard</h1>
		<p class="text-sm text-muted-foreground">{user.email}</p>
	</div>

	<nav class="space-y-2">
		{#each navItems as item}
			<Button variant={item.active ? 'secondary' : 'ghost'} class="w-full justify-start">
				{#if item.icon}
					<item.icon class="mr-2 size-4" />
				{/if}
				{item.label}
			</Button>
		{/each}
	</nav>
</aside>
