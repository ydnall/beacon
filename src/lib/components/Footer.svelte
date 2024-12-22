<script lang="ts">
	import ThemeSwitcher from './theme-switcher.svelte';
</script>

<footer class="container">
	<div class="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
		<div class="flex flex-col items-center gap-4 md:flex-row">
			<img src="/beacon.svg" alt="Beacon" class="size-6 dark:invert" />
			<p class="text-center text-sm leading-loose md:text-left">
				Heavily inspired by the design of
				<a
					href="https://tx.shadcn.com"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4 hover:text-foreground">Taxonomy</a
				>, a project by
				<a
					href="https://twitter.com/shadcn"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4 hover:text-foreground">shadcn</a
				>. The source code for <strong>Beacon</strong> is available on
				<a
					href="https://github.com/ydnall/beacon"
					target="_blank"
					rel="noreferrer"
					class="font-medium underline underline-offset-4 hover:text-foreground">GitHub</a
				>.
			</p>
		</div>
		<ThemeSwitcher />
	</div>
</footer>
