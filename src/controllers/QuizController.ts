import router from "@/router"
import { quizResultMock } from "@/utility/quizResultMock"
import axios from "axios"
import type { Ref } from "vue"

const baseUrl = import.meta.env.VITE_API_URL

export const getResults = (values: any, errors: Ref<string>) => {
    router.push({ name: 'quizResult', params: { resultJSON: JSON.stringify(quizResultMock) } })
    // axios
    //   .post(`${baseUrl}/quiz-result`, {
    //     ...values
    //   })
    //   .then((response: { data: string }) => {
       
    //   })  
    //   .catch((error) => {
    //     errors.value = String(error.response.data.message)
    //   })
  }