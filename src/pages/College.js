import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link, Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';




function College() {

  return (
    <Layout>
<Box as={Link} to="/note/010_college">Click to try</Box>
    </Layout>
  )
}

export default College