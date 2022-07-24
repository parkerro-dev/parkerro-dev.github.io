import React from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  Code,
  Container,
  Heading,
  Text
 
} from '@chakra-ui/react';

import Layout from '../components/Layout';

import {ArrowForwardIcon} from '@chakra-ui/icons';

function App() {
  return (
    
      <Layout>
        <Container align="center">
          <Text>Hi, I'm a <Code>physics undergrad</Code> and a <Code>indie developer</Code>!</Text>
        </Container>

        <Container mt={4} pb={2} borderWidth={1} borderRadius={10} pos='relative'>
          <Heading size='md' mt={2} mb={2}>Bio:</Heading>
          <Text mb={2}>
            I am a third year physics student in Trinity College Dublin. With
            experience in coding Python during the course of the degree, I began 
            coding my own projects at the start of 2022. I learned how to code in
            C# by developing small games in Unity, then moved onto web developement.
          </Text>
          <Button as={Link} to='/projects' 
          pos='absolute' 
          bottom='0' 
          right='0' 
          size='sm' 
          pb={-10}>
          Projects <ArrowForwardIcon ml={2}/>
          </Button>
        </Container>

        <Container mt={4} borderWidth={1} borderRadius={10}>
          <Heading size='md' mt={2} mb={2}>Goals:</Heading>
          <Text mb={2}>
            My goals as of 2022, include becoming fluent enough in computer science and software engineering, that I can
            accurately express ideas. I want to enter the work force with a strong background in physics and programming.
          </Text>
        </Container>

      </Layout>
  );
}

export default App;
