<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<ModeWatcher />
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
