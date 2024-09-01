import React from 'react'


//import all pages
import Home from '../page/Home'
import Services from '../page/Services'
import Login from '../page/Login'
import Signup from '../page/Signup'
import Contact from '../page/Contact'
import Doctors from '../page/Doctors/Doctors'
import DoctorsDetails from '../page/Doctors/DoctorDetails'

import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/doctors/:id" element={<Doctors />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
  </Routes>
}

export default Routers