import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { forgotPasswordSuccessMock, loginMock, restorePasswordSuccessMock } from '../utility/formMock'
import { forgotPasswordMock } from '../utility/formMock'
import { resetPasswordMock } from '../utility/formMock'
import { forgotPassword, loginUser, resetPassword } from '@/controllers/UserController'
import { useUserStore } from '@/stores/user'
import { useSubmitForm } from 'vee-validate'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      props: { formSteps: loginMock, submitFormTo: loginUser }
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import('../views/LoginView.vue'),
      props: { formSteps: forgotPasswordMock, submitFormTo: forgotPassword }
    },
    {
      path: '/forgot-password/success',
      name: 'forgotPasswordSuccess',
      component: () => import('../views/LoginView.vue'),
      props: { formSteps: forgotPasswordSuccessMock, submitFormTo: function(){router.push('/')} }
    },
    {
      path: '/restore-password/',
      name: 'resetPassword',
      component: () => import('../views/LoginView.vue'),
      props: { formSteps: resetPasswordMock, submitFormTo: resetPassword }
    },
    {
      path: '/restore-password/success',
      name: 'restorePassword',
      component: () => import('../views/LoginView.vue'),
      props: { formSteps: restorePasswordSuccessMock, submitFormTo: function(){router.push('/')} }
    },
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/registration', '/forgot-password', '/restore-password', '/forgot-password/success', '/restore-password/success']
  const authRequired = !publicPages.includes(to.path)
  const auth = useUserStore()

  if (authRequired && !auth.user) {
    return '/login'
  }
})

export default router
