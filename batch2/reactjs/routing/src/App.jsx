import React from 'react'
import NavScrollExample from './components/NavbarComp'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';



const App = () => {
  return (
    <div>

      <Router>
        <NavScrollExample/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App