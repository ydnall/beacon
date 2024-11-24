<script lang="ts">
	import { Button } from './ui/button/index';
	import { X } from 'lucide-svelte';

	interface NavItem {
		href: string;
		label: string;
	}

	const navItems: NavItem[] = [
		{ href: '/features', label: 'Features' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/documentation', label: 'Documentation' }
	];

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

{#snippet navItem(href: string, label: string)}
	<a {href} class="text-muted-foreground transition-colors hover:text-black">{label}</a>
{/snippet}

<header class="container my-6 flex justify-between">
	<nav>
		<div class="flex items-center">
			<a href="/" class="mr-10 hidden items-center md:flex">
				<img src="/beacon.svg" alt="Beacon" class="mr-2 size-8" />
				<div class="text-lg font-semibold">
					<span>Beacon</span>
				</div>
			</a>
			<a href="/" class="flex items-center md:hidden" onclick={toggleMenu}>
				{#if isOpen}
					<X class="mr-2 size-8" />
				{:else}
					<img src="/beacon.svg" alt="Beacon" class="mr-2 size-8" />
				{/if}
				<div class="text-lg font-semibold">
					<span>Menu</span>
				</div>
			</a>
			<div class="hidden items-center space-x-5 md:flex">
				{#each navItems as { href, label }}
					{@render navItem(href, label)}
				{/each}
			</div>
		</div>
	</nav>
	<nav>
		<Button href="/login" variant="secondary">Login</Button>
	</nav>
</header>

{#if isOpen}
	<div class="absolute top-[5rem] left-4 right-4 z-50 rounded-lg bg-white p-6 shadow-lg md:hidden">
		<div class="flex flex-col space-y-6">
			<div class="flex items-center">
				<img src="/beacon.svg" alt="Beacon" class="mr-2 size-8" />
				<span class="text-lg font-semibold">Beacon</span>
			</div>
			<div class="flex flex-col space-y-4 ml-4">
				{#each navItems as { href, label }}
					{@render navItem(href, label)}
				{/each}
			</div>
		</div>
	</div>
{/if}
