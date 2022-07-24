import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {Box, Heading} from '@chakra-ui/react'

function Logo() {
    const [Text, setText] = useState('Robert Parker')
  return (
    <motion.div
    
    whileHover={{scale: 1.1}}>
        <Box w={150}>
        <NavLink to='/'>
            <Heading size="md" letterSpacing={'tighter'}>{Text}</Heading>
        </NavLink>
        </Box>
    </motion.div>
  )
}

export default Logo