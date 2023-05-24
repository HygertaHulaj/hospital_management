import Navbar from "./Navbar"
import Home from "./pages/Home"
import Departments from "./pages/Departments"
import Patient from "./pages/Patient"
import MyDoctors from "./pages/Doctors"
import Services from "./pages/Services"
import Branches from "./pages/Branches"
import Login from "./pages/Login"
import './App.css';
// import React, { useState } from "react";
// import Banner from "./s/banner";

import { Route, Routes } from "react-router-dom"
import BloodDonation from "./components/bloodDonation"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments/>} />
           <Route path="/services" element={<Services/>} />
          <Route path="/Doctors" element={<MyDoctors />} />
           <Route path="/branches" element={<Branches/>}/> 
          <Route path="/patient" element={<Patient/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/blooddonation" element={<BloodDonation/>} />
          
        </Routes>
      </div>
      
    </>
    
  )
}


export default App