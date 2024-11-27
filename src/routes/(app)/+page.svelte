<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<Hero />

<section
	id="features"
	class="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
>
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Explore modern web applications with features such as authentication, subscriptions, and ORM
			using Drizzle would work in SvelteKit.
		</p>
	</div>
	<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
		<div class="relative overflow-hidden rounded-lg border bg-background p-2">
			<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
				<img src="/svelte.svg" alt="SvelteKit" class="size-12 dark:invert" />
				<div class="space-y-2">
					<h3 class="font-bold">SvelteKit</h3>
					<p class="text-sm text-muted-foreground">
						Routing, Layouts, SSR, client side rendering, and API routes.
					</p>
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden rounded-lg border bg-background p-2">
			<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
				<img src="/svelte.svg" alt="Svelte 5" class="scale size-12 dark:invert" />
				<div class="space-y-2">
					<h3 class="font-bold">Svelte 5</h3>
					<p class="text-sm text-muted-foreground">
						Universal reactivity with runes and reusable components with snippets.
					</p>
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden rounded-lg border bg-background p-2">
			<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
				<img src="/database.svg" alt="Database" class="size-12 dark:invert" />
				<div class="space-y-2">
					<h3 class="font-bold">Database</h3>
					<p class="text-sm text-muted-foreground">
						ORM using Drizzle and deployed locally with PostgreSQL.
					</p>
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden rounded-lg border bg-background p-2">
			<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
				<img src="/tailwindcss.svg" alt="Tailwind CSS" class="size-12 dark:invert" />
				<div class="space-y-2">
					<h3 class="font-bold">Components</h3>
					<p class="text-sm text-muted-foreground">
						UI components from shadcn-svelte and styled using Tailwind CSS.
					</p>
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden rounded-lg border bg-background p-2">
			<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
				<img src="/authentication.svg" alt="Authentication" class="size-12 dark:invert" />
				<div class="space-y-2">
					<h3 class="font-bold">Authentication</h3>
					<p class="text-sm text-muted-foreground">Authentication using Better Auth Version 1.0</p>
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden rounded-lg border bg-background p-2">
			<div class="flex h-[180px] flex-col justify-between rounded-md p-6">
				<img src="/stripe.svg" alt="Stripe" class="size-12 dark:invert" />
				<div class="space-y-2">
					<h3 class="font-bold">Subscriptions</h3>
					<p class="text-sm text-muted-foreground">
						Free and paid subscription tiers using Stripe.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mx-auto text-center md:max-w-[58rem]">
		<p class="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Beacon also includes a blog and a full-featured documentation site.
		</p>
	</div>
</section>

<section id="open-source" class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
		<h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Proudly Open Source</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Beacon is open source and powered by open source software. <br /> The code is available on
			<a
				target="_blank"
				rel="noreferrer"
				class="underline underline-offset-4"
				href="https://github.com/ydnall/beacon">GitHub</a
			>.
		</p>
	</div>
</section>
