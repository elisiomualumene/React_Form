import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Center
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateSchema } from './types'

import Input2 from './Components/Inputs'

function App() {

  const { control, handleSubmit,formState: { errors }} = useForm({resolver: yupResolver(validateSchema)})

    const onSubmit = (data: any) => {
      console.log('Dados Enviados!', data)
    }

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl>
          <Center h='100vh'>
            <Stack spacing={3}>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input2
                name="email"
                control={control}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='mail@simmmple.com'
                mb='24px'
                fontWeight='500'
                size='lg'
                error={errors.email?.message}
              />
    
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input2
                  name="password"
                  control={control}
                  fontSize='sm'
                  placeholder='Min. 8 characters'
                  mb='24px'
                  size='lg'
                  type='password'
                  variant='auth'
                  error={errors.password?.message}
                />

              <Button colorScheme="red" width='80' type='submit'>Login</Button>
            </Stack>
          </Center>
    </FormControl>
  </form>
  )
}

export default App
