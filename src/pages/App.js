import React from 'react';
import {
  ChakraProvider,
  Heading,
  Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import Fonts from '../components/Fonts'
import {myTheme} from '../styles/myTheme'

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Fonts/>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading size="md">Robert Parker</Heading>
          <Text>Normal Text</Text>
    </ChakraProvider>
  );
}

export default App;
