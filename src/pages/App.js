import React from 'react';
import {
  ChakraProvider,
 
} from '@chakra-ui/react';
import Fonts from '../components/Fonts';
import {myTheme} from '../styles/myTheme';
import NavBar from '../components/NavBar';

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Fonts/>
      <NavBar/>

    </ChakraProvider>
  );
}

export default App;
