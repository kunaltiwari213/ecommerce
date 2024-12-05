import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Navbar/Header'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Component } from 'react'
import Home from './Component/Header2/Home'
import Kidswear from './Component/Header2/Kidswear'
import Toprated from './Component/Header2/Toprated'
import Trending from './Component/Header2/Trending'
import Women from './Component/Header2/Women'
import Mens from './Component/Header2/Men'
import Hero from './Component/Navbar/Hero'
import Login from './Component/Navbar/Login'
import Add from './Component/Other/Add'
import Footer from './Component/Navbar/Footer'
import About from './Component/Navbar/Footer/About'
import Contact from './Component/Navbar/Footer/Contact'





function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='w-full'>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Kidswear' element={<Kidswear/>}/>
      <Route path='/Mens' element={<Mens/>}/>
      <Route path='/Toprated' element={<Toprated/>}/>
      <Route path='/Trending' element={<Trending/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path= '/ADD' element={<Add/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
    </Routes>
   {/* <Hero/> */}         
     <Routes>
       <Route path='/About' element={<About/>}> </Route>
       <Route path='/Contact' element={<Contact/>}> </Route>
     </Routes>
     
     
     
     
   </div>
    </>
  )
}

export default App
