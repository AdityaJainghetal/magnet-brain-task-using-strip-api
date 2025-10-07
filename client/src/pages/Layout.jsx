import React from 'react'
import Topbar from '../component/Topbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
const Layout = () => {
  return (
    <>
    <Topbar/>
  {<Outlet/>}
  <Footer/>
  </>
  )
}

export default Layout