import { useState } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {

  return (
    <>
     <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
    </RouterRoutes>
    </>
  )
}

export default App
