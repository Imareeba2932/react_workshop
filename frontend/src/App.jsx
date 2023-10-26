import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/header'
import Signup from './components/Signup'
import About from './components/About'
import TopPlaces from './components/TopPlaces'
import Footer from './components/footer'
import Slider from './components/slider'



const App = () => {
  return (
    <div>
        <Navbar/>
        <Slider />
        <Header/>
        <About/>
        <TopPlaces/>
        <Signup/> 
        <Footer />
    </div>

    
  )
}

export default App