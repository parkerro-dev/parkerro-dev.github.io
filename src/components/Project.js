import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Code, Heading, Text, Container, IconButton, HStack, Spacer, } from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { useParams, Link} from "react-router-dom";
import {getProject} from '../Content/ProjectContent';
import { IoLogoGithub } from 'react-icons/io';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import wikiLinkPlugin from 'remark-wiki-link';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { ThemeProvider } from '@emotion/react';
import { notesTheme } from '../styles/notesTheme';


function Project() {
    const [content, setContent] = useState("");
    let params = useParams();
    let project = getProject(params.projectId)
    console.log(project.id)
    useEffect(()=>{
        fetch(project.markdown)
        .then((res)=> res.text()
        .then((text)=> setContent(text)));
    })



    return(
        <>
        <HStack w='100%'>
            <Code p={2} borderRadius={10} align='left'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink  as={Link} to='/projects'>Projects</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink  href='#'>{project.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Code>
            <Spacer/>
            <Box borderWidth={1} 
                borderTopRadius={6}
                p={1} 
                size='lg' 
                as='a' 
                href={project.Link} 
                target="_blank"  >
            <HStack>
                <Text>Source</Text>
                <IoLogoGithub />
            </HStack>
            </Box>
        </HStack>
            <ThemeProvider theme={notesTheme}>
            <ReactMarkdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath, [wikiLinkPlugin,  {hrefTemplate: (permalink) => `#/project/${permalink}`}]]} remarkPluginOptions={[]} components={ChakraUIRenderer()}  children={content} /> 
            </ThemeProvider>
        </>
    );
  
}

export default Project


