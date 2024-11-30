<script lang="ts">
	import { Sun, Moon, Laptop } from 'lucide-svelte';

	import { resetMode, setMode } from 'mode-watcher';
	import { buttonVariants } from './ui/button/index';
	import * as DropdownMenu from './ui/dropdown-menu/index';
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
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				<DropdownMenu.Item onclick={() => setMode('light')}>
					<Sun class="mr-2 size-4" />
					<span>Light</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item onclick={() => setMode('dark')}>
					<Moon class="mr-2 size-4" />
					<span>Dark</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item onclick={() => resetMode()}>
					<Laptop class="mr-2 size-4" />
					<span>System</span>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</footer>
