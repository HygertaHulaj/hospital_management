import Navbar from "./Navbar"
import Home from "./pages/Home"
import Departments from "./pages/Departments"
import Patient from "./pages/Patient"
import Doctors from "./pages/Doctors"
import Services from "./pages/Services"
import Branches from "./pages/Branches"
import Login from "./pages/Login"
import './App.css';
import React, { useState } from "react";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments/>} />
           <Route path="/services" element={<Services/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/branches" element={<Branches/>}/>
          <Route path="/patient" element={<Patient/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
      </div>
    </>
    
  )
}


export default App;