<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { Check } from 'lucide-svelte';
</script>

<section class="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
	<div class="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
		<h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
			Simple, transparent pricing
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			One time purchase for lifetime access to all features, no hidden fees.
		</p>
	</div>
	<div class="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
		<div class="grid gap-6">
			<h3 class="text-xl font-bold sm:text-2xl">Features in the Basic plan</h3>
			<ul class="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
				<li class="flex items-center">
					<Check class="mr-2 size-4" /> Unlimited Posts
				</li>
				<li class="flex items-center">
					<Check class="mr-2 size-4" /> Unlimited Users
				</li>
				<li class="flex items-center">
					<Check class="mr-2 size-4" /> Custom Domain
				</li>
				<li class="flex items-center">
					<Check class="mr-2 size-4" /> Dashboard Analytics
				</li>
				<li class="flex items-center">
					<Check class="mr-2 size-4" /> GitHub Repo
				</li>
				<li class="flex items-center">
					<Check class="mr-2 size-4" /> Premium Support
				</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4 text-center">
			<div>
				<h4 class="text-7xl font-bold">$10</h4>
				<p class="text-sm font-medium text-muted-foreground">One Time Purchase</p>
			</div>
			<Button href="/login" class="py-6">
				<span>Get Started</span>
			</Button>
		</div>
	</div>
	<div class="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
			Beacon is a demo app. <strong>You can test the upgrade and won't be charged.</strong>
		</p>
	</div>
</section>
