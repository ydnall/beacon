<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div>
    <Navbar />
	<main>
		{@render children()}
	</main>
    <Footer />
</div>