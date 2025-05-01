<script setup lang="ts">
</script>

<template>
  <div class="w-full bg-background py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4"
        >
          Bem-vindo(a)
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Simplifique pagamentos com
          <span class="text-primary">PayJS</span>
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Nossa plataforma facilita a integração de serviços de pagamento em sua aplicação.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-card text-card-foreground rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/20">
          <div
            class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-primary" fill="none" stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Checkout Simplificado
          </h3>
          <p class="text-muted-foreground">
            Implemente pagamentos em seu site ou app com nossa solução pronta para uso, sem complicações.
          </p>
        </div>

        <div class="bg-card text-card-foreground rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/20">
          <div
            class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-primary" fill="none" stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Integração Rápida
          </h3>
          <p class="text-muted-foreground">
            Nossa API simples e bem documentada permite que você comece a processar pagamentos em minutos.
          </p>
        </div>

        <div class="bg-card text-card-foreground rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/20">
          <div
            class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
          >
            <svg
              class="w-8 h-8 text-primary" fill="none" stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3">
            Painel de Controle
          </h3>
          <p class="text-muted-foreground">
            Acompanhe todas as transações, relatórios financeiros e métricas de conversão em tempo real.
          </p>
        </div>
      </div>

      <div class="text-center mt-20">
        <NuxtLink
          to="#price"
          class="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Começar Agora
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
  <PricesSection />
</template>
