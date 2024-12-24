<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import MetaData from '$lib/components/metadata.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index';
	import DashboardHeader from '$lib/components/dashboard-header.svelte';
	import DashboardSidebar from '$lib/components/dashboard-sidebar.svelte';
	let { children } = $props();
</script>

<MetaData />
<ModeWatcher />

<div class="flex min-h-screen flex-col">
	<Sidebar.Provider>
		<DashboardSidebar />
		<main class="flex-1">
			<DashboardHeader />
			{@render children?.()}
		</main>
	</Sidebar.Provider>
</div>
