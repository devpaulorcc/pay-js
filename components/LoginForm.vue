<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/registry/new-york-v4/ui/button'
import { Input } from '@/registry/new-york-v4/ui/input'
import { Label } from '@/registry/new-york-v4/ui/label'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">
                Olá novamente
              </h1>
              <p class="text-muted-foreground text-balance">
                Entra com sua conta PayJS
              </p>
            </div>
            <div class="grid gap-3">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div class="grid gap-3">
              <div class="flex items-center">
                <Label for="password">Senha</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" class="w-full">
              Login
            </Button>
            <div class="text-center text-sm">
              Ainda não tem uma conta?
              <NuxtLink to="/register">
                Cadastre aqui
              </NuxtLink>
            </div>
          </div>
        </form>
        <div class="bg-muted relative hidden md:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          >
        </div>
      </CardContent>
    </Card>
    <div class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      <NuxtLink to="/">
        Voltar a página inicial.
      </NuxtLink>
    </div>
  </div>
</template>
