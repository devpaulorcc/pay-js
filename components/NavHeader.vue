<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/registry/new-york-v4/ui/dropdown-menu'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/registry/new-york-v4/ui/navigation-menu'

import { onMounted, onUnmounted, ref } from 'vue'

const { path } = useRoute()
const isMobile = ref(false)

function checkScreenSize() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <NavigationMenu v-if="!isMobile">
    <NavigationMenuList class="gap-2 *:data-[slot=navigation-menu-item]:h-7 **:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium">
      <NavigationMenuItem>
        <NavigationMenuLink as-child :data-active="path === '/'">
          <NuxtLink to="/">
            Inicío
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :data-active="path === '/plans'">
          <NuxtLink to="/plans">
            Planos
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child :data-active="path === '/docs'">
          <NuxtLink to="/docs/introduction">
            Documentação
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  <div v-else class="flex justify-end">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <button
          class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Menu de navegação"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent class="w-56 mt-2 bg-background">
        <DropdownMenuItem>
          <NuxtLink
            to="/"
            class="w-full px-2 py-1.5 text-sm"
            :class="{ 'font-medium text-primary': path === '/' }"
            @click="closeDropdown"
          >
            Inicío
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NuxtLink
            to="/plans"
            class="w-full px-2 py-1.5 text-sm"
            :class="{ 'font-medium text-primary': path === '/plans' }"
            @click="closeDropdown"
          >
            Planos
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NuxtLink
            to="/docs/introduction"
            class="w-full px-2 py-1.5 text-sm"
            :class="{ 'font-medium text-primary': path === '/docs' }"
            @click="closeDropdown"
          >
            Documentação
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
