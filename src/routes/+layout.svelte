<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import MetaData from '$lib/components/metadata.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<MetaData />

{@render children()}
