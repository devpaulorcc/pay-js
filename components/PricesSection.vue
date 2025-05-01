<script setup>
const showPurchaseButton = ref(false)
</script>

<template>
  <div class="py-12 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-primary mb-4">
          Nossos Planos
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Escolha o plano que melhor atende às necessidades do seu negócio. Sem taxas ocultas ou surpresas.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Free Plan -->
        <div class="bg-card text-card-foreground rounded-xl p-6 shadow-md border border-primary/20">
          <div class="mb-4">
            <h3 class="text-xl font-semibold">
              Básico
            </h3>
            <p class="text-muted-foreground text-sm">
              Para pequenos negócios e testes
            </p>
          </div>
          <div class="mb-6">
            <span class="text-3xl font-bold text-primary">Grátis</span>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center">
              <svg
                class="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Painel básico
            </li>
          </ul>
          <NuxtLink to="/">
            <button
              class="w-full py-2.5 px-4 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition"
            >
              Usar Grátis
            </button>
          </NuxtLink>
        </div>

        <!-- Premium Plan -->
        <div
          class="relative bg-card text-card-foreground rounded-xl p-6 shadow-md border-2 border-primary"
        >
          <div
            class="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg"
          >
            RECOMENDADO
          </div>
          <div class="mb-4">
            <h3 class="text-xl font-semibold">
              Vitalício
            </h3>
            <p class="text-muted-foreground text-sm">
              Solução definitiva para seu negócio
            </p>
          </div>
          <div class="mb-6">
            <span class="text-3xl font-bold text-primary">R$9,99</span>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Painel avançado e personalizável</span>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Webhook</span>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Suporte prioritário</span>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Acesso antecipado a novos recursos e betas</span>
            </li>
          </ul>
          <NuxtLink to="#">
            <button
              class="w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition"
            >
              Comprar Vitalício
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
