import { Control } from 'react-hook-form'
import { InputProps } from '@chakra-ui/react'

export type TextInputProps = InputProps & {
  name: string
  control: Control<any, any>
  label?: any
  error?: string
}