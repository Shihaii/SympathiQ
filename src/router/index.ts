import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import {
  forgotPasswordSuccessMock,
  loginMock,
  restorePasswordSuccessMock
} from '../utility/formMock'
import { forgotPasswordMock } from '../utility/formMock'
import { resetPasswordMock } from '../utility/formMock'
import { forgotPassword, loginUser, resetPassword } from '@/controllers/UserController'
import { useUserStore } from '@/stores/user'
import { useSubmitForm } from 'vee-validate'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import MarketSection from '@/components/Market/MarketSection.vue'
import Friends from '@/components/Dashboard/Friends.vue'
import SavedSection from '@/components/Saved/SavedSection.vue'
import SavedProducts from '@/components/Saved/SavedProducts.vue'
import SavedSpecialists from '@/components/Saved/SavedSpecialists.vue'
import ForumSection from '@/components/Forum/ForumSection.vue'
import TestsSection from '@/components/Tests/TestsSection.vue'
import TestPage from '@/components/Tests/TestPage.vue'
import QuizResult from '@/components/Tests/QuizResult.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:'/',
          component: Dashboard
        },
        {
          path:'dashboard',
          component: Dashboard
        },
        {
          path:'market',
          component: MarketSection
        },
        {
          path:'saved',
          component: SavedSection,
          children:[
            {
              path:'',
              component: SavedProducts
            },
            {
              path:'specialists',
              component: SavedSpecialists
            }
          ]
        },
        {
          path:'forum',
          component: ForumSection
        },
        {
          path:'tests',
          component: TestsSection
        },
        {
          path:'quiz',
          component: TestPage
        },
        {
          path:'quiz-result/:resultJSON',
          name:'quizResult',
          component: QuizResult,
          props: true
        },
        {
          path:'my-appointments',
          component: Dashboard
        },
        {
          path:'my-notes',
          component: Dashboard
        },
        {
          path:'my-specialists',
          component: Dashboard
        },
        {
          path:'my-courses',
          component: Dashboard
        },
        {
          path:'my-journal',
          component: Dashboard
        },
        {
          path:'messages',
          component: Dashboard
        },
        {
          path:'pricing&plans',
          component: Dashboard
        },
        {
          path:'settings',
          component: Dashboard
        }
        ,
        {
          path:'friends',
          component: Friends
        }
      ]
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
      props: {
        formSteps: forgotPasswordSuccessMock,
        submitFormTo: function () {
          router.push('/')
        }
      }
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
      props: {
        formSteps: restorePasswordSuccessMock,
        submitFormTo: function () {
          router.push('/')
        }
      }
    }
  ]
})

// router.beforeEach(async (to) => {
//   const publicPages = [ 
//     '/login',
//     '/registration',
//     '/forgot-password',
//     '/restore-password',
//     '/forgot-password/success',
//     '/restore-password/success'
//   ]
//   const authRequired = !publicPages.includes(to.path)
//   const auth = useUserStore()

//   if (authRequired && !auth.user) {
//     return '/login'
//   }
// })

export default router
