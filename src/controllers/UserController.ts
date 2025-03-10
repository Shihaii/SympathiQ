import router from '@/router'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import type { Ref } from 'vue'

const baseUrl = import.meta.env.VITE_API_URL

export const createUser = (values: any, errors: Ref<string>) => {
  delete values.agree
  axios
    .post(`${baseUrl}/registration`, {
      ...values
    })
    .then((response: { data: string }) => {
      const user = useUserStore()
      user.login(response.data)
    })  
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}

export const loginUser = async (values: any, errors: Ref<string>) => {
  await axios
    .post(`${baseUrl}/authorization`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log('data: ',response.data)
      const user = useUserStore()
      user.login(response.data)
    })
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}

export const forgotPassword = (values: any, errors: Ref<string>) => {
  axios
    .post(`${baseUrl}/forgot_password`, {
      ...values
    })
    .then((response) => {
      if (response.status === 200) router.push('/forgot-password/success')
    })
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}

export const resetPassword = (values: any, errors: Ref<string>) => {
  delete values.confirm_password
  axios
    .post(`${baseUrl}/reset_password`, {
      ...values
    })
    .then((response) => {
      if (response.status == 200) router.push('/restore-password/success')
    })
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}
