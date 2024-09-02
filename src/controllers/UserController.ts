import router from '@/router'
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import type { Ref } from 'vue'

export const createUser = (values: any, errors: Ref<string>) => {
  delete values.agree
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/registration`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
      const user = useUserStore()
      user.login(response.data)
    })  
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}

export const loginUser = async (values: any, errors: Ref<string>) => {
  await axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/authorization`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log('response.data - ', response.data)
      const user = useUserStore()
      user.login(response.data)
    })
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}

export const forgotPassword = (values: any, errors: Ref<string>) => {
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/forgot_password`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
      if (response.status == 200) router.push('/forgot-password/success')
    })
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}

export const resetPassword = (values: any, errors: Ref<string>) => {
  delete values.confirm_password
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/reset_password`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
      if (response.status == 200) router.push('/restore-password/success')
    })
    .catch((error) => {
      errors.value = String(error.response.data.message)
    })
}
