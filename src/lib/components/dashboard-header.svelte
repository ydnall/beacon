<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar/index';
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
    import { authClient } from '$lib/client';
    import { User, Settings, LogOut } from 'lucide-svelte';
    import { goto } from '$app/navigation';

    const session = authClient.useSession();

    $: userInitials = $session?.data?.user.name
        ?.split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase() || '??';

</script>

<header class="top-0 w-full border-b">
    <div class="container flex h-14 items-center">
        <span class="text-lg font-bold">Dashboard</span>
        <div class="ml-auto flex items-center space-x-4">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger
                    class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label="User menu"
                >
                    <Avatar.Root class="size-8 transition-transform hover:scale-105">
                        {#if $session?.data?.user.image}
                            <Avatar.Image
                                src={$session.data.user.image}
                                alt={$session.data.user.name || 'User avatar'}
                            />
                        {:else}
                            <Avatar.Fallback class="font-medium dark:invert">{userInitials}</Avatar.Fallback>
                        {/if}
                    </Avatar.Root>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content class="w-56" align="end">
                    {#if $session?.data?.user}
                        <div class="border-b px-2 py-1.5">
                            <p class="text-sm font-medium">{$session.data.user.name}</p>
                            <p class="text-xs text-muted-foreground">{$session.data.user.email}</p>
                        </div>
                    {/if}
                    <DropdownMenu.Group>
                        <DropdownMenu.Item>
                            <User class="mr-2 size-4" />
                            <a href="/dashboard/profile">Profile</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <Settings class="mr-2 size-4" />
                            <a href="/dashboard/settings">Settings</a>
                        </DropdownMenu.Item>
                    </DropdownMenu.Group>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item 
                        onclick={async () => {
                            await authClient.signOut();
                            await goto('/login');
                        }}
                    >
                        <LogOut class="mr-2 size-4" />
                        Sign out
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</header>