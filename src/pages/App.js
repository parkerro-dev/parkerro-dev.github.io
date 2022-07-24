import React from 'react';
import {
  Code,
  Container,
  Heading,
  Text
 
} from '@chakra-ui/react';

import Layout from '../components/Layout';

function App() {
  return (
    
      <Layout>
        <Container align="center">
          <Text>Hi, I'm a <Code>physics undergrad</Code> and a <Code>indie developer</Code>!</Text>
        </Container>

        <Container mt={4} borderWidth={1} borderRadius={10}>
          <Heading size='md' mt={2} mb={2}>Bio:</Heading>
          <Text mb={2}>
            I am a third year physics student in Trinity College Dublin. With early
            experience in coding Python during the course of the degree, I began 
            coding my own projects at the start of 2022. I learned how to code in
            C# by developing small games in Unity, then moved onto web developement.
          </Text>
        </Container>

      </Layout>
  );
}

export default App;
