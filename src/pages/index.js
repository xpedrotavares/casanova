import React, {useState} from 'react'
import About from '../components/About';
import AsideSocialMedia from '../components/Aside-Social-Media';
import Contact1 from '../components/Contact-with-styled';
import Contact2 from '../components/Contact'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar'
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
          <Contact1 />
          <Contact2 />
        </HomeContainer>
    )
}

export default Home
