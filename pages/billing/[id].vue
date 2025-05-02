<script setup lang="ts">
import { onMounted, ref } from 'vue'

const userId = ref()
const informationsPlan = ref()
const configVariables = useRuntimeConfig()

const PUBLIC_KEY = configVariables.public.keyPayment

function mountBrick() {
    const mp = new window.MercadoPago(PUBLIC_KEY, {
        locale: 'pt-BR',
    })

    mp.bricks().create('cardPayment', 'form-checkout', {
        initialization: {
            amount: informationsPlan.value.price,
        },
        callbacks: {
            onReady: () => {
                console.log('Checkout Bricks pronto')
            },
            onSubmit: async (cardFormData) => {
                try {
                    const payload = {
                        token: cardFormData.token,
                        issuer_id: cardFormData.issuer_id,
                        payment_method_id: cardFormData.payment_method_id,
                        transaction_amount: informationsPlan.value.price,
                        installments: cardFormData.installments,
                        description: informationsPlan.value.description,
                        payer: {
                            email: cardFormData.payer.email,
                            identification: {
                                type: cardFormData.payer.identification.type,
                                number: cardFormData.payer.identification.number,
                            },
                        },
                    }

                    const responsePayment: any = await $fetch(`${configVariables.public.apiUrl}/payment/charge`, {
                        method: 'POST',
                        body: JSON.stringify(payload),
                    })
                    if (responsePayment?.status === 'approved') {

                        const updatePlan: any = await $fetch(`${configVariables.public.apiUrl}/user/plan/${userId.value}`, {
                        method: 'POST',
                    })
                        navigateTo('/login')
                    }
                }
                catch (error) {
                    console.error('Erro ao processar:', error)
                }
            },
            onError: (error) => {
                console.error('Erro no Brick:', error)
            },
        },
    })
}
onMounted(async () => {
    const planChoiced = await $fetch(`${configVariables.public.apiUrl}/payment/plans`, {
        method: 'POST',
    })

    const route = useRoute()
    userId.value = route.params.id

    informationsPlan.value = planChoiced
    const script = document.createElement('script')
    script.src = 'https://sdk.mercadopago.com/js/v2'
    script.onload = () => {
        mountBrick()
    }
    document.head.appendChild(script)

})
</script>

<template>
    <Card class="max-w-xl mx-auto">
        <CardContent class="space-y-4">
            <div id="form-checkout" class="mt-6" />
        </CardContent>
    </Card>
</template>
