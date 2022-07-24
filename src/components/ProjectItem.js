import { Box, CircularProgress, CircularProgressLabel, Heading, Tag, VStack } from '@chakra-ui/react'
import React from 'react'

function ProjectItem(props) {
  return (
    <Box borderRadius={15}
    borderWidth={2} height='150px' width='150px'>
        <VStack>
            <CircularProgress mt={5} size='50px' value={props.prog}>
                <CircularProgressLabel>{props.prog}%</CircularProgressLabel>
            </CircularProgress>
            <Heading size='s' mt={4}>{props.title}</Heading>
            <Tag>{props.lang}</Tag>
        </VStack>
        
        
    </Box>
  )
}

export default ProjectItem