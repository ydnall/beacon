<script>
	import { Users, FileText, DollarSign } from 'lucide-svelte';
	import { Card } from '$lib/components/ui/card';

	// Stats data
	const stats = [
		{
			label: 'Total Users',
			value: '2,834',
			icon: Users,
			trend: '+4.5%'
		},
		{
			label: 'Documents',
			value: '1,267',
			icon: FileText,
			trend: '+2.1%'
		},
		{
			label: 'Revenue',
			value: '$45,234',
			icon: DollarSign,
			trend: '+12.5%'
		}
	];
</script>

<div class="grid gap-6 md:grid-cols-3">
	{#each stats as stat}
		<Card class="p-6">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm text-muted-foreground">{stat.label}</p>
					<h3 class="mt-1 text-2xl font-semibold">{stat.value}</h3>
					<p class="mt-1 text-sm text-emerald-600">{stat.trend}</p>
				</div>
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
					<svelte:component this={stat.icon} class="h-6 w-6 text-primary" />
				</div>
			</div>
		</Card>
	{/each}
</div>
