<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen p-6 md:p-12 bg-gradient-to-b from-background to-muted/20">
    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto text-center space-y-6 py-12">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Simplifique seus pagamentos
      </h1>
      <p class="max-w-[42rem] mx-auto leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Integre pagamentos em qualquer aplicação com nossa API com uma documentação clara.
      </p>
      <div class="flex gap-4 justify-center">
        <Button size="lg">Criar Conta Gratuita</Button>
        <Button size="lg" variant="outline">Ver Documentação</Button>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="max-w-6xl mx-auto py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <CardTitle>Integração Simplificada</CardTitle>
          <CardDescription>API RESTful poderosa com SDKs prontos e documentação completa.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="link" class="px-0">Explorar API →</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <CardTitle>Segurança PCI Nível 1</CardTitle>
          <CardDescription>Proteção de dados com criptografia de ponta a ponta e certificação máxima.</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
              <path d="M3 12c0 2.4 4 6 9 6 3.8 0 7.2-2.8 8.7-5"></path>
              <path d="M3 12h18"></path>
            </svg>
          </div>
          <CardTitle>Pagamentos Globais</CardTitle>
          <CardDescription>Aceite múltiplas moedas e métodos de pagamento internacionais.</CardDescription>
        </CardHeader>
      </Card>
    </section>

    <!-- CTA Section -->
    <section class="max-w-4xl mx-auto py-12 text-center space-y-6">
      <h2 class="text-3xl font-bold tracking-tight">Integre pagamentos em minutos</h2>
      <p class="max-w-[42rem] mx-auto leading-normal text-muted-foreground">
        Comece a processar transações com nossa API intuitiva e suporte especializado 24/7.
      </p>
    </section>
  </div>
</template>