import router from '@/router'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const useUserStore = defineStore({
  id: 'auth',
  state: () => ({
    user: Cookies.get('user') ?? null
  }),

  actions: {
    async login(user : string | null) {
      this.user = user
      Cookies.set('user', JSON.stringify(user), { expires: 30 })
      router.push('/')
    },
    logout() {
      this.user = null
      Cookies.remove('user')
      router.push('/login')
    }
  }
})
