<script lang="ts">
	import { getStores } from '$app/stores';
	import { siteConfig } from '$lib/config/site.js';

	const { page } = getStores();

	export let title: string = siteConfig.name;

	$: title = $page.data?.title ? `${$page.data.title} | ${siteConfig.name}` : siteConfig.name;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords} />
	<meta name="author" content="ydnall" />

	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteConfig.url + $page.url.pathname} />
	<meta property="og:image" content={siteConfig.ogImage} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:site_name" content={siteConfig.name} />
</svelte:head>
