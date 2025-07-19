import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'  
import About from '../Pages/About'
import Projects from '../Pages/Project'
import Skills from '../Pages/Skills'
import Achievements from '../Pages/Achievements'
import Contact from '../Pages/Contact' 
import Resume from '../Pages/Resume'
import Terminal from '../Pages/Terminal'


function HandleRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/terminal" element={<Terminal/>} />
        

    </Routes>
  )
}

export default HandleRoute
