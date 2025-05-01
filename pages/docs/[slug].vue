<script setup lang="ts">
import { Separator } from '@/registry/new-york-v4/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/registry/new-york-v4/ui/sidebar'

import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

const defaultOpen = useCookie<boolean>('sidebar_state')
definePageMeta({
  layout: false,
})
</script>

<template>
  <SidebarProvider :default-open>
    <AppSidebar />
    <SidebarInset>
      <header class="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b">
        <div class="flex h-14 w-full items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1.5" />
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <NavHeader />
          <div class="ml-auto flex items-center gap-2">
            <ThemeSelector />
            <ModeSwitcher />
          </div>
        </div>
      </header>

      <template>
        <div>
          <div v-if="slug === 'introduction'">
            <DocsIntrodution />
          </div>

          <div v-else-if="slug === 'configuracao'">
            <p>Como configurar o sistema.</p>
          </div>

          <div v-else>
            <p>Conteúdo não encontrado.</p>
          </div>
        </div>
      </template>
    </SidebarInset>
  </SidebarProvider>
</template>
