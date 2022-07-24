
import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Layout from '../components/Layout'

function ProjectPage() {
  return (
    <>
    <Layout>
        <Outlet/>
    </Layout>
        
    </>
    
  )
}

export default ProjectPage