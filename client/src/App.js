import Navbar from "./Navbar"
import Home from "./pages/Home"
import Departments from "./pages/Departments"
import Patient from "./pages/Patient"
import MyDoctors from "./pages/Doctors"
import Services from "./pages/Services"
import Branches from "./pages/Branches"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DoctorsProfile from "./pages/dashboard/Doctors"
import DoctorsProfileAdd from "./pages/dashboard/DoctorsProfileAdd"

import './App.css';
import "./Global.css";
// import React, { useState } from "react";
// import Banner from "./s/banner";

import { Route, Routes } from "react-router-dom"
import BloodDonation from "./components/bloodDonation"
import Dashboard from "./pages/dashboard/dashboard"
import Patients from "./pages/dashboard/Patients"
import Appointments from "./pages/dashboard/Appointments"
import BloodDonationD from "./pages/dashboard/BloodDonationD"
import BloodRequestSchema from "./pages/dashboard/BloodRequestSchema"
import Bed from "./pages/dashboard/Bed"
import Surgery from "./pages/dashboard/Surgery"
import Nurses from "./pages/dashboard/Nurses"
import Hospitals from "./pages/dashboard/Hospitals"
import MedicalTest from "./pages/dashboard/MedicalTest"
function App() {
  return (
    <>
 
      {/* <Navbar /> */}
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
          <Route path="/register" element={<Register/>} />\
          <Route path="/dashboard/dashboard" element={<Dashboard/>} />
           <Route path="/dashboard/Patients" element={<Patients/>} />
          <Route path="/dashboard/doctors" element={<DoctorsProfile/>} />
          <Route path="/dashboard/DoctorsProfileAdd" element={<DoctorsProfileAdd/>} />
          <Route path="/dashboard/Appointments" element={<Appointments/>} />
          <Route path="/dashboard/BloodDonationD" element={<BloodDonationD/>} />
          <Route path="/dashboard/BloodRequestSchema" element={<BloodRequestSchema/>} />
          <Route path="/dashboard/Bed" element={<Bed/>} />
          <Route path="/dashboard/Surgery" element={<Surgery/>} />
          <Route path="/dashboard/Nurses" element={<Nurses/>} />
          <Route path="/dashboard/Hospitals" element={<Hospitals/>} />
          <Route path="/dashboard/MedicalTest" element={<MedicalTest/>} />
        </Routes>
      </div>
      
    </>
    
  )
}


export default App