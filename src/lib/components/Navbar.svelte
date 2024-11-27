<script lang="ts">
	import { Button } from './ui/button/index';
	import { X } from 'lucide-svelte';

	interface NavItem {
		href: string;
		label: string;
	}

	const navItems: NavItem[] = [
		{ href: '/#features', label: 'Features' },
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
	<a
		{href}
		class="hidden text-sm text-muted-foreground transition-colors hover:text-black dark:hover:text-white md:inline"
		>{label}</a
	>
	<a {href} class="inline text-sm hover:underline md:hidden" onclick={toggleMenu}>{label}</a>
{/snippet}

<header class="container flex justify-between py-6">
	<nav class="flex">
		<div class="flex">
			<a href="/" class="mr-10 hidden items-center md:flex">
				<img src="/beacon.svg" alt="Beacon" class="mr-2 size-6 dark:invert" />
				<div class="font-bold">
					<span>Beacon</span>
				</div>
			</a>
			<button class="flex items-center md:hidden" onclick={toggleMenu}>
				{#if isOpen}
					<X class="mr-2 size-6" />
				{:else}
					<img src="/beacon.svg" alt="Beacon" class="mr-2 size-6 dark:invert" />
				{/if}
				<div class="font-bold">
					<span>Menu</span>
				</div>
			</button>
			<div class="hidden items-center space-x-5 md:flex">
				{#each navItems as { href, label }}
					{@render navItem(href, label)}
				{/each}
			</div>
		</div>
	</nav>
	<nav>
		<Button href="/login" variant="secondary" class="font-normal">
			<span>Login</span>
		</Button>
	</nav>
</header>

{#if isOpen}
	<div
		class="absolute left-6 right-6 top-[5rem] z-50 rounded-lg bg-background px-4 py-6 shadow-lg md:hidden"
	>
		<div class="flex flex-col space-y-4">
			<div class="flex items-center">
				<a href="/" class="flex items-center" onclick={toggleMenu}>
					<img src="/beacon.svg" alt="Beacon" class="mr-2 size-6 dark:invert" />
					<div class="font-bold">
						<span>Beacon</span>
					</div>
				</a>
			</div>
			<div class="ml-2 flex flex-col space-y-4">
				{#each navItems as { href, label }}
					{@render navItem(href, label)}
				{/each}
			</div>
		</div>
	</div>
{/if}
