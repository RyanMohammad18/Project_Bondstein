import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './HomePage/Home';

function App() {


  return (
    <>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        
      
         
          
          
          
          
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
