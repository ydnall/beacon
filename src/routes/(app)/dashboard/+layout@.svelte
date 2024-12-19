<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<ModeWatcher />
	<main class="flex-1">
		{@render children()}
	</main>
</div>
