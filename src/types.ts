import * as yup from 'yup'

export interface FormStep {
  img?: string
  title: string
  description: string
  rules: yup.AnyObject
  styles?: string
  inputs: FormInput[]
  link?: Link
  buttonText: string
  agreeTerms?: boolean
}

export interface FormInput {
  type: string
  name: string
  label: string
  options?: Option[]
  styles?: string
  placeholder?: string
  link?: Link
}
export interface Option {
  id: string
  value: string
  text: string
}

export interface Link {
  to: string
  textLink: string
  textBefore?: string
  textAfter?: string
}
