"use client"
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MainHome from '@/components/MainHome'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    })
  }, [])
  const [toggle, setToggle] = useState(false);
  function closeNav() {
    setToggle(false);
  }
  return (
    <div className='' >
      <Navbar toggle={toggle} setToggle={setToggle} closeNav={closeNav} />
      <div onClick={() => closeNav()}>
        <MainHome />
        <div className='max-w-7xl md:mx-auto mx-5'>
          <About />
          <Projects />
          <Achievements />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  )
}
