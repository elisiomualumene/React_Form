import React from 'react'
import { Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

import { TextInputProps } from './types'

export default function Input2({ name, control, error, label, ...rest }: TextInputProps) {
  return (
    <>
      <div>
        {label}
      </div>

      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, ref, value } }) => (
          <Input
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        )}
      />

      {error && <p>{error}</p>}
    </>
  )
}