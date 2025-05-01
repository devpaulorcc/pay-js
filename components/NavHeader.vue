<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/registry/new-york-v4/ui/navigation-menu'

const { path } = useRoute()
</script>

<template>
  <NavigationMenu>
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
</template>
