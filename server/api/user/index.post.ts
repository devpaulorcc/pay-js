export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const registerUser = await $fetch(`${process.env.API_URL}/user`, {
        method: 'POST',
        body: {
            name: body.name,
            email: body.email,
            password: body.password,
            plan: body.selectedPlan,
        },
    })

    const authUser = await $fetch(`${process.env.API_URL}/user/auth`, {
        method: 'POST',
        body: {
            email: body.email,
            password: body.password,
        },
    })

    return {
        id: registerUser.user.id,
        ...authUser
    }
})
