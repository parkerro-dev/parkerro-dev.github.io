import {useEffect, useState} from 'react'
import { useParams, Link, useNavigate} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import wikiLinkPlugin from 'remark-wiki-link';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Text, ThemeProvider, Box,  ColorModeScript, Heading, Button} from '@chakra-ui/react';
import {notesTheme} from '../styles/notesTheme';
import {ArrowBackIcon} from '@chakra-ui/icons'

function Note() {
    const [content, setContent] = useState("")
    let params = useParams();
    let noteLink =  `/Markdown/College/${params.noteId}.md`
    const navigate = useNavigate();
   
    useEffect(() => {
        fetch(noteLink)
        .then((res)=> {  
          res.text()
        .then((text)=>setContent(text))
        })})
  // markdown files never start with <, if they do its because the file it is trying to access doesnt exist
  if(content.charAt(0) === "<"){
    return (
      <>
      <Button size='sm' onClick={()=>navigate(-1)}><ArrowBackIcon mr={2}/>back</Button>
      <Heading>Oh no!</Heading>
      <Text>It looks like I haven't written this note yet!</Text>
      </>
    )
  }
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