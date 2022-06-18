import { Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <>
        <Flex gap='3' justify='space-around'>
          <Link fontSize='xs' href='#' >Sign In</Link>
          <Button  colorScheme='pink' size='sm'>
              Sign Up
          </Button>
        </Flex>
    </>
  )
}

export default Login