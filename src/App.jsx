import { useState } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';

function App() {

  return (
    <>
     <RouterRoutes>
      <Route path="/" element={<Home />} />
    </RouterRoutes>
    </>
  )
}

export default App
