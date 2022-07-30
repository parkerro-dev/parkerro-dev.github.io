import {useEffect, useState} from 'react'
import { useParams, Link} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import wikiLinkPlugin from 'remark-wiki-link';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Text, ThemeProvider, Box,  ColorModeScript} from '@chakra-ui/react';
import {notesTheme} from '../styles/notesTheme';



function Note() {
    const [content, setContent] = useState("")
    let params = useParams();
    let noteLink = `/Markdown/College/${params.noteId}.md`;

    useEffect(() => {
        fetch(noteLink)
        .then((res)=> res.text()
        .then((text)=> setContent(text)))})
  return (
    
    <ThemeProvider theme={notesTheme}>
      <ColorModeScript/>
      <ReactMarkdown rehypePlugins={[rehypeKatex]}
          remarkPlugins={[remarkMath, 
              remarkGfm, 
              [wikiLinkPlugin,  
                  {hrefTemplate: (permalink) => `#/note/${permalink}`}]]}
          components={ChakraUIRenderer()}
          children={content}/>
    </ThemeProvider>
  ) 
}

export default Note