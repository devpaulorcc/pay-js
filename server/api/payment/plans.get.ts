export default defineEventHandler(async (event) => {
    const planPro = await $fetch(`${process.env.URL_API}/payment/plans`, {
        method: 'POST',
    })

    return {
        price: planPro.price,
        transactionAmount: planPro.transactionAmount,
        description: planPro.description
    }
})