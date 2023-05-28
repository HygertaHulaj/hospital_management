import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Navbar from "../Navbar"

const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <GetStarted />
    <GetInTouch />
    </>

  )
}

export default Home