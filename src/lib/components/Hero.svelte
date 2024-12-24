<script lang="ts">
	import { Button } from './ui/button/index';
	import { Github } from 'lucide-svelte';
</script>

<section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
	<div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
		<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
			An example app built using the SvelteKit framework.
		</h1>
		<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Beacon provides a robust foundation for building modern web applications. Crafted with
			SvelteKit and styled using Tailwind CSS.
		</p>
		<div class="flex gap-4">
			<Button href="/register" size="lg">
				<span>Try demo</span>
			</Button>
			<Button size="lg" variant="outline" href="https://github.com/ydnall/beacon" target="_blank">
				<Github />
				<span>View on GitHub</span>
			</Button>
		</div>
	</div>
</section>
