import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link, Outlet } from 'react-router-dom';
import { Box, Heading, Code, HStack, StackDivider, VStack, Text, Stack, Table, Tbody, Tr, Td } from '@chakra-ui/react';


function NoteFeature({title, desc, link, ...rest}) {
  return(
    <Box as={Link} to={link} p={5} borderWidth={1} borderRadius={5} shadow='md' {...rest}>
      <Heading size='md'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}


function College() {

  return (
    <Layout>
      <HStack divider={<StackDivider borderColor='gray.200'/>} justify="space-evenly" borderWidth={1} borderRadius={10} p={4}>
        <Heading fontSize={{base: '12px', md: '20px'}}>Year of Study:<Code>3rd</Code></Heading>
        <Heading fontSize={{base: '12px', md: '20px'}}>University:<Code>Trinity College Dublin</Code></Heading>
        <Heading fontSize={{base: '12px', md: '20px'}}>Course:<Code>Physical Sciences</Code></Heading>
      </HStack>

      <VStack w='100%' justify='left' display={{base: 'none', md: 'flex'}}>
        <Heading size='md' mt={2} mb={2}>Notes:</Heading>
        <HStack>
          <NoteFeature title='College Index' link='/note/010_college' desc='Link to all college notes'/>
          <NoteFeature title='First Year' link='/note/011_first_year' desc='Link to first year notes'/>
          <NoteFeature title='Second Year' link='/note/012_second_year' desc='Link to second year notes'/>
          <NoteFeature title='Third Year' link='/note/013_third_year' desc='Link to third year notes'/>
        </HStack>

        <Heading size='md' mt={2} mb={2}>Resources:</Heading>

        <HStack></HStack>
        <HStack></HStack>
      </VStack>

      <Stack display={{base: 'flex', md: 'none'}} direction="column">
        <Heading size="md" mt={3} mb={0}>Notes:</Heading>
        <Table>
            <Tbody>
                <Tr>
                    <Td><Link to='/note/010_college'>College Index</Link></Td>
                    <Td>all college notes</Td>
                </Tr>
                <Tr>
                    <Td><Link to='/note/011_first_year'>First Year</Link></Td>
                    <Td>first year notes</Td>
                </Tr>
                <Tr>
                    <Td><Link to='/note/012_second_year'>Second Year</Link></Td>
                    <Td>second year notes</Td>
                </Tr>
                <Tr>
                    <Td><Link to='/note/013_third_year'>Third Year</Link></Td>
                    <Td>third year notes</Td>
                </Tr>
            </Tbody>
        </Table>

        <Heading size="md" mt={5} mb={2}>Resources:</Heading>

      </Stack>
    </Layout>
  )
}

export default College