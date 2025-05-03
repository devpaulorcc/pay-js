<script setup lang="ts">
import { Separator } from '@/registry/new-york-v4/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/registry/new-york-v4/ui/sidebar'

const defaultOpen = useCookie<boolean>('sidebar_state')
</script>

<template>
  <SidebarProvider :default-open>
    <!-- <ApSidebar /> -->
    <SidebarInset>
      <header class="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
        <div class="flex h-14 w-full items-center gap-2 px-4">
          <!-- <SidebarTrigger class="-ml-1.5" /> -->
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <NavHeader />
          <div class="ml-auto flex items-center gap-2">
            <ThemeSelector />
            <ModeSwitcher />
            <div class="ml-auto flex items-center gap-2">
              <NuxtLink
                to="/login"
                class="inline-flex items-center px-2 py-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
              >
                Entrar
              </NuxtLink>
              <NuxtLink
                to="/register"
                class="inline-flex items-center px-2 py-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
              >
                Cadastrar
              </NuxtLink>
            </div>
          </div>
        </div>
      </header>
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
