import * as yup from 'yup'

export interface IFormData {
  email: string
  password: string
}

export const validateSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required('Informe o seu e-mail'),
  password: yup.string().required('Informe a sua senha')
})