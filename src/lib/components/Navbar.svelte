<script lang="ts">
	import { Button } from "./ui/button/index";

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
</script>

{#snippet navItem(href: string, label: string)}
	<a {href} class="text-muted-foreground hover:text-black transition-colors">{label}</a>
{/snippet}

<header class="container flex justify-between my-6">
	<nav>
		<div class="flex items-center space-x-5">
			<a href="/" class="flex items-center mr-3">
				<img src="/beacon.svg" alt="Beacon" class="size-8 mr-2" />
				<div class="text-xl font-semibold">
					<span class="hidden md:inline">Beacon</span>
					<span class="md:hidden">Menu</span>
				</div>
			</a>
			<div class="hidden md:flex items-center space-x-5">
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
