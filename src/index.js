import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './pages/App';
import College from './pages/College';
import Projects from './pages/Projects';
import Project from './components/Project';
import ProjectPage from './pages/ProjectPage';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {myTheme} from './styles/myTheme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <HashRouter>
  <ChakraProvider theme={myTheme}>
    <StrictMode>
      <ColorModeScript />
      <Routes>
        <Route exact path='' element={<App />} />
        <Route path='projects' element={<Projects />}/>
        <Route path='project' element={<ProjectPage/>}>
          <Route path=':projectId' element={<Project/>}/>
        </Route>
        
        <Route path='college' element={<College />} />
        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      </Routes>
      
    </StrictMode>
    </ChakraProvider>
  </HashRouter>
  
);
