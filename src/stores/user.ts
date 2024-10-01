import router from '@/router'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const useUserStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: Cookies.get('user') ?? null
  }),
  // localStorage.getItem('user')
  // JSON.parse(this.$cookies.get('user'))
  actions: {
    async login(user) {
      this.user = user
      Cookies.set('user', JSON.stringify(user), { expires: 30 })
      router.push('/')
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/login')
    }
  }
})
