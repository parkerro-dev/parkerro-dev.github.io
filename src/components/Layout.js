import { Container } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Layout({children}) {
 return (
    <>
    <NavBar/>
    <Container maxW="container.md" pt={20}>
        {children}
    </Container> 
    <Footer/>
    </>
  )
}
