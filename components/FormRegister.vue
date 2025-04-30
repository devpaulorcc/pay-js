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
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox'
import { Input } from '@/registry/new-york-v4/ui/input'
import { Label } from '@/registry/new-york-v4/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/registry/new-york-v4/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/new-york-v4/ui/select'
import { Textarea } from '@/registry/new-york-v4/ui/textarea'

const plans = [
  {
    id: 'free',
    name: 'Plano Gratuito',
    description: 'Perfeito para testes e pequenos projetos de forma limitada.',
    price: 'FREE',
  },
  {
    id: 'pro',
    name: 'Plano PRO',
    description: 'Escolha vitalícia com todos os recursos e vantagens da PayJS.',
    price: '$20',
  },
] as const


</script>

<template>
  <div class="flex max-w-md flex-col gap-4">
    <Card :style="themeStyles">
      <CardHeader>
        <CardTitle class="text-lg">
          Cadastro
        </CardTitle>
        <CardDescription>
          Crie sua conta para ter seu acesso a plataforma PayJS.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="flex flex-col gap-2">
              <Label for="name">Nome</Label>
              <Input id="name" placeholder="Evil Rabbit" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="email">Email</Label>
              <Input id="email" placeholder="example@acme.com" />
            </div>
            
          </div>
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="flex flex-col gap-2">
              <Label for="password">Senha</Label>
              <Input id="password" placeholder="XXXXXXXXXXXX" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="cpassword">Confirmar Senha</Label>
              <Input id="cpassword" placeholder="XXXXXXXXXXXX" />
            </div>
            
          </div>
            
          <fieldset class="flex flex-col gap-3">
            <legend class="text-sm font-medium">
              Planos
            </legend>
            <p class="text-muted-foreground text-sm">
              Selecione o plano que combina com você!
            </p>
            <RadioGroup
              default-value="starter"
              class="grid gap-3 md:grid-cols-2"
            >
              <Label
                v-for="plan in plans"
                :key="plan.id"
                class="has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-ring/10 flex items-start gap-3 rounded-lg border p-3"
              >
                <RadioGroupItem
                  :id="plan.name"
                  :value="plan.id"
                  class="data-[state=checked]:border-primary"
                />
                <div class="grid gap-1 font-normal">
                  <div class="font-medium">{{ plan.name }}</div>
                  <div class="text-muted-foreground text-xs leading-snug">
                    {{ plan.description }}
                  </div>
                </div>
              </Label>
            </RadioGroup>
          </fieldset>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label for="terms" class="font-normal">
                Eu aceito os termos e condições de uso
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button variant="outline" size="sm">
          Cancelar
        </Button>
        <Button size="sm">
          Cadastrar
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
