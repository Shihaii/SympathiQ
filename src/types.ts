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

export interface User{
  id: string;
  name: string;
  lastname: string;
  image: string;
}

export interface Friend{
 id: string
 name: string
 surname: string
 dateOfBirth: Date
 sex: string
}

export interface Order {
  id: string
  name: string
  quantity: number
  date: Date
  price: number
  status: string
}

export interface ProductCard {
  id: string;
  title: string;
  ratings: number;
  image: string;
  price: number;
  previousPrice: number;
}

export interface ForumDiscussion {
  id: string;
  title: string;
  description: string;
  image: string;
  views: number;
  lastViewedBy: User[];
}

export interface ForumTopic {
  name: string;
  request: string;
  subtopics?: ForumTopic[];
}