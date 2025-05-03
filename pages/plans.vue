<script setup lang="ts">
import PricesSection from '@/components/PricesSection.vue'

const sliderValue = ref(10)
const showVitalicioCard = ref(false)

function handleSliderChange(e: Event) {
  const target = e.target as HTMLInputElement
  sliderValue.value = Number.parseInt(target.value)
  showVitalicioCard.value = sliderValue.value > 20
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <section class="m-10 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Escolha o plano perfeito para você
        </h1>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ajuste o valor abaixo para ver recomendações personalizadas
        </p>
      </div>
    </section>

    <section class="bg-gradient-to-b from-background to-muted/10">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="bg-card p-8 rounded-xl border border-primary/20 shadow-lg">
          <div class="mb-8">
            <div class="flex justify-between mb-2">
              <span class="text-muted-foreground">Valor aproximado</span>
              <span class="font-bold text-primary">R$ {{ sliderValue }}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              :value="sliderValue"
              class="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              @input="handleSliderChange"
            >
            <div class="flex justify-between text-sm text-muted-foreground mt-2">
              <span>R$ 10</span>
              <span>Mais +</span>
            </div>
          </div>

          <div v-if="showVitalicioCard" class="animate-fade-in">
            <div class="border border-primary/30 p-6 rounded-lg">
              <h3 class="text-xl font-bold text-primary mb-2">
                Recomendamos o Plano Vitalício!
              </h3>
              <p class="mb-4">
                Seu fluxo mensal é acima de R$ 20,00? Escolha o plano vitalício para aproveitar 100% dos recursos da PayJS.
              </p>
              <NuxtLink to="/register">
                <button
                  class="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-6 rounded-lg transition"
                >
                  Comprar Vitalício
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PricesSection />
  </div>
</template>

<style>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
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

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: hsl(var(--primary));
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
