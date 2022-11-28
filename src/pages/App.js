import React from 'react';
import {Link as ReachLink} from 'react-router-dom'
import {
  Button,
  Code,
  Container,
  Heading,
  Image,
  Text,
  HStack,
  UnorderedList,
  ListItem,
  List,
  Link
 
} from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoYoutube} from 'react-icons/io'
import Layout from '../components/Layout';

import {ArrowForwardIcon} from '@chakra-ui/icons';

function App() {
  return (
    
      <Layout>
         <Container align="center">
          <Text>Hi, I'm a <Code>physics undergrad</Code> and an <Code>indie developer</Code>!</Text>
        </Container>
        <Container mt={4} pb={2} borderWidth={1} borderRadius={10} pos='relative'>
          <HStack>
            <Image  objectFit='cover' borderRadius='full' boxSize='100px' src="website_image.png" alt="Robert Parker"/>
            
          
          <Text p= {2} m={2}>
            I am a third year physics student in Trinity College Dublin. With
            experience in coding Python during the course of the degree, I began 
            coding my own projects at the start of 2022. I learned how to code in
            C# by developing small games in Unity, then moved onto web developement.
          </Text>
          <Button as={ReachLink} to='/projects' 
          pos='absolute' 
          bottom='0' 
          right='0' 
          size='sm' 
          pb={-10}>
          Projects <ArrowForwardIcon ml={2}/>
          </Button>
       
          </HStack>
        </Container>
       
        
        

        <Container mt={4}>
          <Heading size='md' fontWeight="bold" mt={2} mb={2}>ABOUT</Heading>
          <UnorderedList>
            <ListItem>📍 I live in Dublin, Ireland </ListItem>
            <ListItem>🎲 I'm a problem solver and love challenges </ListItem>
            <ListItem>💖 I love reading and learning</ListItem>
            <ListItem>🎸 I play guitar</ListItem>
          </UnorderedList>
        </Container>
        
        <Container mt={4}>
          <Heading size='md' fontWeight="bold" mt={4}>College 📚</Heading>
          <Text pl={2}>
          I am currently a full-time student at Trinity College Dublin. During the course of my studies I have written numerous markdown notes for different modules. These can be found over in the "College" section. (Note: some notes may not exist yet but it is being updated regularly)
          </Text>
        </Container>

        <Container mt={4}>
          <Heading size='md' fontWeight="bold" mt={4}>Where to find me?</Heading>
          <List>
          <ListItem>
            <Link href="https://github.com/parkerro-dev" target="_blank">
              <Button
                variant="ghost"
                color={'green.400'}
                leftIcon={<IoLogoGithub />}
              >
                @parkerro-dev
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://www.linkedin.com/in/parkerro/" target="_blank">
              <Button
                variant="ghost"
                color={'green.400'}
                leftIcon={<IoLogoLinkedin />}
              >
                @parkerro
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/robert_parker_/" target="_blank">
              <Button
                variant="ghost"
                color={'green.400'}
                leftIcon={<IoLogoInstagram/>}
              >
                @robert_parker_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link  href="https://www.youtube.com/channel/UCUN84TM7qyEdGcesE32QQQA" target="_blank">
              <Button
                variant="ghost"
                color={'green.400'}
                leftIcon={<IoLogoYoutube/>}
              >
                @parkerro
              </Button>
            </Link>
          </ListItem>
        </List>
          
        </Container>

      </Layout>
  );
}

export default App;
