import React from 'react'
import {Box, 
    Container,  
    Heading,
    Text,
    Flex,
    Stack,
    useColorModeValue} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

function linkComponent(){
    const active = 1
}

function NavBar() {
  return (
    <Box 
    as='nav'
    position='fixed'
    width='100%'
    bg={useColorModeValue('white','black')}
    zIndex={2}
    sx={{backdropFilter: 'blur(5px)'}}>
        <Container
        maxW="container.md"
        display="flex"
        p={2}
        wrap="wrap"
        align="center"
        justify="space-between">
            <Flex align="center" mr={5}>
            <Heading size="md" letterSpacing={'tighter'}>Robert Parker</Heading>
            </Flex>

            <Stack 
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alignItems='center'
            flexGrow={1}
            mt ={{base: 4, md: 0}}>
            
                <NavLink
                style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };}}
                to={'/projects'}>
                    Projects
                </NavLink>

            </Stack>

            <Box flex={1} align='right'>
                <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
        </Container>
    </Box>
  )
}

export default NavBar