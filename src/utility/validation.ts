import * as yup from 'yup'

export const registrationRulesStep_1 = yup.object({
  firstName: yup.string().required().label('Full Name'),
  lastName: yup.string().required().label('Last Name'),
  email: yup.string().required().email().label('Email Address'),
  password: yup.string().required().label('Password')
})

export const registrationRulesStep_2 = yup.object({
  dateOfBirth: yup.string().required().label('Date of Birth'),
  gender: yup.string().required().label('Gender'),
  country: yup.string().required().label('Country'),
  timeZone: yup.string().required().label('Time zone')
})

export const registrationRulesStep_3 = yup.object({
  occupation: yup.string().required().label('Occupation'),
  phone: yup.string().required().label('Phone'),
  language: yup.string().required().label('Language'),
  agree: yup.string().required().label('Agree terms')
})

export const registrationRulesStep_4 = yup.object({
  interests: yup.string().required().label('Interests')
})

export const loginRules = yup.object({
  email: yup.string().required().email().label('Full Name'),
  password: yup.string().required().label('Password')
})

export const forgotPasswordRules = yup.object({
  email: yup.string().required().email().label('Email Address')
})

export const resetPasswordRules = yup.object({
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .label('confirm password')
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
})
