import router from '@/router'
import { useUserStore } from '@/stores/user'
import axios from 'axios'

export const createUser = (values: any) => {
  delete values.agree
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/registration`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
    })
}

export const loginUser = (values: any) => {
  
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/authorization`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
      if (response.status == 200){
        const user = useUserStore();
        user.login(response.data);
      }
    })
}

export const forgotPassword = (values: any) => {
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/forgot_password`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
      if (response.status == 200) router.push('/forgot-password/success')
    })
}

export const resetPassword = (values: any) => {
  delete values.confirm_password
  axios
    .post(`https://api-scipro.sheep.fish/wp-json/api/v1/reset_password`, {
      ...values
    })
    .then((response: { data: any }) => {
      console.log(response.data)
      if (response.status == 200) router.push('/restore-password/success')
    })
}