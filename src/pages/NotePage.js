
import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Layout from '../components/Layout'

function NotePage() {
  return (
    <>
    <Layout>
        <Outlet/>
    </Layout>
        
    </>
    
  )
}

export default NotePage