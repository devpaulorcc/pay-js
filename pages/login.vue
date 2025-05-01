<!-- <script setup lang="ts">
</script>

<template>
  <div class="flex flex-1 items-center justify-center p-4">
    <FormDemo />
  </div>
</template> -->

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="bg-muted flex min-h-svh flex-col items-center justify-center md:p-10">
    <div class="w-full max-w-sm md:max-w-3xl">
      <LoginForm />
    </div>
  </div>
</template>
