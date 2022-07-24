import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Code, Heading, Text } from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { useParams, Link } from "react-router-dom";
import {getProject} from '../Content/ProjectContent';

function Project() {
 
    let params = useParams();
    let project = getProject(params.projectId)
    return(
        <>
        <Code p={2} borderRadius={10}>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink  as={Link} to='/projects'>Projects</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink  href='#'>{params.projectId}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Code>

        <Heading>{project.name}</Heading>
        <Text>{project.date}</Text>

        <Text mt={5}>{project.paragraphOne}</Text>
       
        </>
    );
  
}

export default Project