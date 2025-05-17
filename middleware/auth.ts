export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('accessToken')

  if (!token.value) {
    return navigateTo('/login')
  }
})
