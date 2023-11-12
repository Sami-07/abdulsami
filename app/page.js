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
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    })
  }, [])
  return (
    <div className=''>
      <Navbar />
      <MainHome />
      <div className='max-w-7xl md:mx-auto mx-5'>
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
