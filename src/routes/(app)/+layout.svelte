<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
