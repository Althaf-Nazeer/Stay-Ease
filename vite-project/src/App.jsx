import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from "./assets/components/Landing.jsx"
import Foodservices from "./assets/components/Foodservices.jsx"
import Update from "./assets/components/Update.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from  "./assets/components/Home.jsx"
import Laundry from "./assets/components/Laundrser.jsx"
import Signup from "./assets/components/Signup.jsx"
import Booked from "./assets/components/Booked.jsx"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
      <Route path="/food" element={<Foodservices/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
      <Route path="/Laundry" element={<Laundry/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Booked" element={<Booked/>}></Route>
      
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
