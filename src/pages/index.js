import React, {useState} from 'react'
import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Hero />
          <About />
          <Portfolio />
        </>
    )
}

export default Home
