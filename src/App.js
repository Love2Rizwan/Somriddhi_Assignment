import { useState } from 'react'  
import SignUpHeader from './components/SignUpHeader/SignUpHeader'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import Offers from './components/Offers/Offers'
import DealOfDay from './components/DealOfDay/DealOfDay'
import Copun from './components/CopunByCategires/Copun'
import PopularMemberShip from './components/PopularMemberShip/PopularMemberShip'
import Footer from './components/Footer/Footer'
import Imagetext from './components/ImageText/Imagetext'

function App() {
  

  return (
    <>
    <SignUpHeader />
    <Navbar />
    <Home />
    <Features />
    <Offers />
    <DealOfDay />
    <Copun />
    <Imagetext/>
    <PopularMemberShip />
    <Footer />
    </>
  )
}

export default App
