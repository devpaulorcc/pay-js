<script setup lang="ts">
import { Button } from '@/registry/new-york-v4/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/registry/new-york-v4/ui/card'
import { Input } from '@/registry/new-york-v4/ui/input'
import { Label } from '@/registry/new-york-v4/ui/label'
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox'
</script>

<template>
  <div class="flex max-w-md flex-col gap-4 mt-16">
    <Card :style="themeStyles">
      <CardHeader>
        <CardTitle class="text-lg">
          Login
        </CardTitle>
        <CardDescription>
          Acesse sua conta PayJS.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-2">
              <Label for="email">Email</Label>
              <Input id="email" placeholder="example@acme.com" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label for="remember" class="font-normal">
              Lembrar de mim
            </Label>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <NuxtLink to="/">
            <Button variant="outline" size="sm">
              Voltar
            </Button>
        </NuxtLink>
        <Button size="sm">
          Entrar
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
