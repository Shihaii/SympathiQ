import type { FormStep } from '../types'
import * as yup from 'yup'
import { forgotPasswordRules, loginRules, registrationRulesStep_1, registrationRulesStep_2, registrationRulesStep_3, registrationRulesStep_4, resetPasswordRules } from '../utility/validation'

export const registrationMock: FormStep[] = [
  {
    title: 'Welcome Back',
    description: 'SIgn to continue',
    rules: registrationRulesStep_1,
    link: {
      to: '/login',
      textLink: 'Login',
      textBefore: 'You have an account?'
    },
    buttonText: 'Login',
    inputs: [
      {
        type: 'text',
        name: 'first_name',
        label: 'First Name'
      },
      {
        type: 'text',
        name: 'last_name',
        label: 'Last Name'
      },
      {
        type: 'text',
        name: 'email',
        label: 'Email'
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password'
      }
    ]
  },
  {
    title: 'Add Your Details',
    description: 'Lorem Ipsum ipsum Lorem',
    rules: registrationRulesStep_2,
    buttonText: 'Next',
    inputs: [
      {
        type: 'text',
        name: 'date_of_birth',
        label: 'Date of Birth'
      },
      {
        type: 'radio',
        name: 'gender',
        label: 'Select Your Gender',
        options: [
          {
            id: 'form-select-option__male',
            value: 'male',
            text: 'Male'
          },
          {
            id: 'form-select-option__female',
            value: 'female',
            text: 'Female'
          },
          {
            id: 'form-select-option__none',
            value: 'none',
            text: 'Rather To Say'
          }
        ]
      },
      {
        type: 'text',
        name: 'country',
        label: 'Country'
      },
      {
        type: 'select',
        name: 'time_zone',
        label: 'Time Zone',
        options: [
          {
            id: '',
            value: '-4',
            text: '-4'
          },
          {
            id: '',
            value: '-3',
            text: '-3'
          },
          {
            id: '',
            value: '-2',
            text: '-2'
          },
          {
            id: '',
            value: '-1',
            text: '-1'
          },
          {
            id: '',
            value: '0',
            text: '0'
          },
          {
            id: '',
            value: '1',
            text: '1'
          },
          {
            id: '',
            value: '2',
            text: '2'
          },
          {
            id: '',
            value: '3',
            text: '3'
          },
          {
            id: '',
            value: '4',
            text: '4'
          }
        ]
      }
    ]
  },
  {
    title: 'Add Your Details',
    description: 'Lorem Ipsum ipsum Lorem',
    rules: registrationRulesStep_3,
    agreeTerms: true,
    buttonText: 'Next',
    inputs: [
      {
        type: 'select',
        name: 'occupation',
        label: 'Occupation',
        options: [
          {
            id: '',
            value: 'something',
            text: 'Something'
          },
          {
            id: '',
            value: 'nothing',
            text: 'Nothing'
          }
        ]
      },
      {
        type: 'phone',
        name: 'phone',
        label: 'Mobile Number'
      },
      {
        type: 'select',
        name: 'language',
        label: 'Language',
        options: [
          {
            id: '',
            value: 'english',
            text: 'English'
          }
        ]
      }
    ]
  },
  {
    title: 'Area of Interest',
    description: 'Lorem Ipsum ipsum Lorem',
    rules: registrationRulesStep_4,
    styles: 'max-w-[75.3rem] px-[5rem] py-[5rem]',
    buttonText: 'Finish',
    inputs: [
      {
        type: 'multicheckbox',
        name: 'interests',
        label: '',
        options: [
          {
            id: 'form-checkbox-option-1',
            value: 'cognitive psychology',
            text: 'Cognitive Psychology'
          },
          {
            id: 'form-checkbox-option-2',
            value: 'development psychology',
            text: 'Development Psychology'
          },
          {
            id: 'form-checkbox-option-3',
            value: 'clinical psychology',
            text: 'Clinical Psychology'
          },
          {
            id: 'form-checkbox-option-4',
            value: 'positive psychology',
            text: 'Positive Psychology'
          }
        ]
      }
    ]
  }
]

export const loginMock: FormStep[] = [
  {
    title: 'Welcome Back',
    description: 'SIgn to continue',
    rules: loginRules,
    link: {
      to: '/registration',
      textLink: 'Register',
      textBefore: 'Don’t have an account?'
    },
    styles: 'max-w-[57rem] px-36 pt-28 pb-20',
    buttonText: 'Login',
    inputs: [
      {
        type: 'text',
        name: 'email',
        label: 'Full Name'
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        link: {
          to: '/forgot-password',
          textLink: 'Forgot Password ?'
        }
      }
    ]
  }
]

export const forgotPasswordMock: FormStep[] = [
  {
    title: 'Forget Password?',
    description: 'Please, enter your email address to request a password reset',
    rules: forgotPasswordRules,
    styles: 'max-w-[67.4rem] px-[6rem] pt-[7rem] pb-[7rem]',
    buttonText: 'Send Email',
    inputs: [
      {
        type: 'text',
        name: 'email',
        label: ''
      }
    ]
  }
]

export const forgotPasswordSuccessMock: FormStep[] = [
  {
    title: 'Check Your Email',
    description: 'We have sent a reset password to your email address',
    rules: yup.object({}),
    styles: 'max-w-[67.4rem] pt-[7.4rem] pb-[6.9rem]',
    inputs: [],
    img: '/src/assets/images/open-mail.svg',
    buttonText: 'Back To Home'
  }
]

export const resetPasswordMock: FormStep[] = [
  {
    title: 'Restoring Password',
    description: 'Create New Password ',
    rules: resetPasswordRules,
    styles: 'max-w-[57rem] px-[9rem] pt-[7rem] pb-[7rem]',
    buttonText: 'Restore Password',
    inputs: [
      {
        type: 'password',
        name: 'password',
        label: 'New Password'
      },
      {
        type: 'password',
        name: 'confirm_password',
        label: 'Confirm New Password'
      }
    ]
  }
]

export const restorePasswordSuccessMock : FormStep[] = [
  {
    title: 'Your Password Restored',
    description: 'Please, note your new password not to forget ',
    rules: {},
    styles: 'max-w-[67.4rem] pt-[7.4rem] pb-[6.9rem]',
    inputs: [],
    img: '/src/assets/images/password-restored.svg',
    buttonText: 'Back To Home'
  }
]
