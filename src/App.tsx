import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Center
} from '@chakra-ui/react'

function App() {
  return (
  <form>
    <FormControl>
          <Center h='100vh'>
            <Stack spacing={3}>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input id='email' type='email' placeholder="Insira o seu E-mail" size='lg' width="80"/>
    
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input id='password' type='password' placeholder="Insira a sua Password" size='lg'  width="80"/>
              <Button colorScheme="red" width='80' type='submit'>Login</Button>
            </Stack>
          </Center>
    </FormControl>
  </form>
  )
}

export default App
