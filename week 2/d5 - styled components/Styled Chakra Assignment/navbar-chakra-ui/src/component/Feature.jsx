import { Flex } from '@chakra-ui/react'
import React from 'react'

const Feature = () => {
  return (
    <>
          <Flex gap='5' className='feature-link' justify='space-around'>
            <a  href='#' target="_blank">Inspiration</a>
            <a  href='#' >Find Work</a>
            <a  href='#' >Learn Design</a>
            <a  href='#' >Hire Designer</a>
          </Flex>
    </>
  )
}

export default Feature