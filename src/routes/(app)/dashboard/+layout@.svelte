<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import MetaData from '$lib/components/metadata.svelte';
	let { children } = $props();
</script>

<MetaData />
<ModeWatcher />

<div class="flex min-h-screen flex-col">
	<main class="flex-1">
		{@render children()}
	</main>
</div>
