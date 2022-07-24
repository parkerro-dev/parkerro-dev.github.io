import { Flex, Text, Box, Heading, Table, Tr, Th, Thead, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'

function Projects() {
  return (
    <Layout>
        <Heading size='lg' mb={5}>Current Projects:</Heading>
        <Box w='100%' align='center'>
            <Flex 
                align='flex-start' 
                justify='center' 
                w='100%'  
                direction='row' 
                gap={10} 
                wrap='wrap'>
                    <Box as={Link} to={'/project/website'}>
                        <ProjectItem  
                        title="This Website" 
                        lang="javascript"
                        prog='60'/>
                    </Box>
                    <Box as={Link} to={'/project/discordBot'}>
                        <ProjectItem 
                        title="Discord Bot" 
                        lang="javascript"
                        prog='0'/>
                    </Box>
                    <Box as={Link} to={'/project/neuralNetwork'}>
                        <ProjectItem 
                        title="Neural Network" 
                        lang="python"
                        prog='0'/>
                    </Box>
                    <Box as={Link} to={'/project/latexCalculator'}>
                        <ProjectItem 
                        title="Latex Calculator" 
                        lang="tbd"
                        prog='5'/>  
                    </Box>
            </Flex>
        </Box>

        <Heading size='lg' mt={10}>Finished Projects:</Heading>
        <Table>
            <Thead>
                <Tr>
                    <Th>Project Title</Th>
                    <Th>Language</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td><Link to='/project/animatedSkyComponent'>Animated Sky Component</Link></Td>
                    <Td>javascript</Td>
                </Tr>
            </Tbody>

        </Table>
    </Layout>
  )
}

export default Projects