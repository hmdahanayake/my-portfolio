import './App.css'
import './index.css'
import React from 'react'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/About'
import Skill from './components/skills/Skill'
import Service from './components/services/Service'
import Qualification from './components/qualification/qualification'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'
function App() {
  
  return (
    <>
     <Header/>
     <main className='main'>
      <Home/>
      <About/>
      <Skill/>
      <Service/>
      <Qualification/>
      <Testimonials/>
      <Contact/>
     
     </main>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
