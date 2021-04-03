import React, {useState} from 'react'
import About from '../components/About';
import AsideSocialMedia from '../components/Aside-Social-Media';
import Contact from '../components/Contact-with-styled';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {HomeContainer} from "./HomeElements"

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HomeContainer>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
            <AsideSocialMedia />
          <Hero />
           <About />
          <Portfolio />
          <Contact />
          <Footer />
        </HomeContainer>
        
    )
}

export default Home;