import React from 'react'
import Nav from '../Components/Shared/Navbar/Nav'
import Foot from '../Components/Shared/Footer/Foot'
import { Outlet } from 'react-router'
import Head from '../Components/Heading/Head'
import Container from '../Components/Container/Container'
import MarqueeText from '../Components/Marquee/MarqueeText'

function Root() {
  return (
   <>
   <Container>

   <Head/>
   <MarqueeText/>
   <Nav/>
   <Outlet/>
   <Foot/>
   </Container>
   </>
  )
}

export default Root