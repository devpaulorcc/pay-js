<script setup lang="ts">
const activeTheme = useCookie<string>('active_theme', { readonly: true })
const isScaled = computed(() => !!activeTheme.value?.endsWith('-scaled'))
</script>

<template>
  <Body
    class="bg-background overscroll-none font-sans antialiased"
    :class="[
      activeTheme ? `theme-${activeTheme}` : '',
      isScaled ? 'theme-scaled' : '',
    ]"
  >
    <NuxtLayout>
      <Notifications />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
