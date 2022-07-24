import React from 'react'
import {Box, 
    Container,  
    Heading,
    Flex,
    Stack,
    useColorModeValue,
    Link,
    MenuItem,
    Menu,
    MenuList,
    IconButton,
    MenuButton} from '@chakra-ui/react';
    import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import Logo from './Logo';


function NavBar() {
  return (
    <Box 
    as='nav'
    position='fixed'
    width='100%'
    bg={useColorModeValue('white','#1a1a1a')}
    zIndex={3}
    sx={{backdropFilter: 'blur(5px)'}}>
        <Container
        maxW="container.md"
        display="flex"
        pr={2}
        pl ={2}
        wrap="wrap"
        align="center"
        justify="space-between">
            <Flex align="center" mr={5} >
                <Logo/>
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
                        color: isActive ? "#44355B" : "",
                        }}}
                    to={'/projects'}>
                        <Link
                        p={3}>
                        Projects
                        </Link>
                    </NavLink>

                    <NavLink
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "#44355B" : "",
                        }}}
                    to={'/college'}>
                        <Link
                        p={3}>
                        College
                        </Link>
                    </NavLink>
                
                

            </Stack>

            <Box flex={1} align='right' p={2}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu id="navbar-menu">
                <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                />
                <MenuList bg={'black'}>
                    <NavLink to="/">
                    <MenuItem as={Link}>About</MenuItem>
                    </NavLink>
                    <NavLink to="/projects">
                    <MenuItem as={Link}>Projects</MenuItem>
                    </NavLink>
                    <NavLink to="/College">
                    <MenuItem as={Link}>College</MenuItem>
                    </NavLink>
                </MenuList>
                </Menu>
          </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default NavBar