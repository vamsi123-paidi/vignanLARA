import React from 'react'
import Navbar from './components/Navbar.jsx'
import Counter from './components/Counter.jsx'
import Text from './components/Text.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Skills from './components/Skills.jsx'
const App = () => {
  const obj = {
    name:"adam",
    age:23,
    adress:{
      dno : 123,
      city:"guntur"
    }
  }
  return (
    <div>
      <Text/>
      {/* <Counter/> */}
      {/* <Navbar obj={obj}/> */}
      {/* <Home/>
      <About/>
      <Skills/> */}
    </div>
    
  )
}

export default App