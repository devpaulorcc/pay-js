export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const responsePayment: any = await $fetch(`${process.env.API_URL}/payment/charge`, {
		method: 'POST',
		body: JSON.stringify(body.payload),
	})

	if (responsePayment?.status === 'approved') {
		await $fetch(`${process.env.API_URL}/user/plan/${body.userId}`, {
			method: 'POST',
		})
	}

	return {
		success: true
	}
})