import React from 'react'
import Navbar from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
const App = () => {
  return (
   
    <div>
      <Navbar />
       <Home />
       <About />
       <Contact />
       <Footer />
       </div>
  )
}

export default App;