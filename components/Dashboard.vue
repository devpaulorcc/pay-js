<script lang="ts">
export const description = 'Painel de administração para gateway de pagamentos com métricas financeiras e ações rápidas de gerenciamento'
export const iframeHeight = '825px'
export const containerClass = 'w-full h-full'
</script>

<script setup lang="ts">
import { Button } from '@/registry/new-york-v4/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card'
import { Activity, ArrowUpRight, BarChart2, Bell, Cpu, CreditCard, DollarSign, FileText, Key, Settings, Ticket, Users } from 'lucide-vue-next'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle class="text-sm font-medium">
              Volume Processado
            </CardTitle>
            <DollarSign class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              R$245.231,89
            </div>
            <p class="text-xs text-muted-foreground">
              Valor total processado pela PayJS
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle class="text-sm font-medium">
              Total de Transações
            </CardTitle>
            <CreditCard class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              12302
            </div>
            <p class="text-xs text-muted-foreground">
              Acompanhe o número de transações
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle class="text-sm font-medium">
              Gateways prontos
            </CardTitle>
            <Activity class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              2
            </div>
            <p class="text-xs text-muted-foreground">
              Configure um gateway para uso
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle class="text-sm font-medium">
              Total de webhooks
            </CardTitle>
            <Users class="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-bold">
              3
            </div>
            <p class="text-xs text-muted-foreground">
              Estes são seus webhooks ativos em conta
            </p>
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card class="xl:col-span-2">
          <CardHeader class="flex flex-row items-center">
            <div class="grid gap-2">
              <CardTitle>Gráfico de Volume</CardTitle>
              <CardDescription>
                Volume de pagamentos processados nos últimos 30 dias
              </CardDescription>
            </div>
            <Button as-child size="sm" class="ml-auto gap-1">
              <a href="#">
                Ver Detalhes
                <ArrowUpRight class="h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div class="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
              <div class="text-center">
                <BarChart2 class="h-12 w-12 mx-auto text-muted-foreground" />
                <p class="mt-2 text-muted-foreground">
                  Gráfico de volume de pagamentos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Gerencie sua integração</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-3">
            <NuxtLink to="/tickets">
              <Button variant="outline" class="h-16 justify-start w-full cursor-pointer">
                <Ticket class="mr-2 h-4 w-4" />
                <div class="text-left">
                  <p class="text-sm font-medium">
                    Abrir Ticket
                  </p>
                  <p class="text-xs text-muted-foreground">
                    Suporte técnico
                  </p>
                </div>
              </Button>
            </NuxtLink>

            <NuxtLink to="/api-requests">
              <Button variant="outline" class="h-16 justify-start w-full cursor-pointer">
                <Cpu class="mr-2 h-4 w-4" />
                <div class="text-left">
                  <p class="text-sm font-medium">
                    Requisições API
                  </p>
                  <p class="text-xs text-muted-foreground">
                    Logs e histórico
                  </p>
                </div>
              </Button>
            </NuxtLink>

            <NuxtLink to="/webhooks">
              <Button variant="outline" class="h-16 justify-start w-full cursor-pointer">
                <Bell class="mr-2 h-4 w-4" />
                <div class="text-left">
                  <p class="text-sm font-medium">
                    Webhooks
                  </p>
                  <p class="text-xs text-muted-foreground">
                    Configurar eventos
                  </p>
                </div>
              </Button>
            </NuxtLink>

            <NuxtLink to="/settings">
              <Button variant="outline" class="h-16 justify-start w-full cursor-pointer">
                <Settings class="mr-2 h-4 w-4" />
                <div class="text-left">
                  <p class="text-sm font-medium">
                    Configurações
                  </p>
                  <p class="text-xs text-muted-foreground">
                    Personalizar integração
                  </p>
                </div>
              </Button>
            </NuxtLink>

            <NuxtLink to="/documentation">
              <Button variant="outline" class="h-16 justify-start w-full cursor-pointer">
                <FileText class="mr-2 h-4 w-4" />
                <div class="text-left">
                  <p class="text-sm font-medium">
                    Documentação
                  </p>
                  <p class="text-xs text-muted-foreground">
                    Guia de implementação
                  </p>
                </div>
              </Button>
            </NuxtLink>

            <NuxtLink to="/api-keys">
              <Button variant="outline" class="h-16 justify-start w-full cursor-pointer">
                <Key class="mr-2 h-4 w-4" />
                <div class="text-left">
                  <p class="text-sm font-medium">
                    API Keys
                  </p>
                  <p class="text-xs text-muted-foreground">
                    Gerenciar chaves
                  </p>
                </div>
              </Button>
            </NuxtLink>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>
