// // import About from "./components/About"
// // import Home from "./components/Home"
// import Navbar from "./components/Navbar"
// // import Skills from "./components/Skills"

// function App(){
//   const obj = {
//     name:"adam",
//     age:1000,
//     details:{
//       dno:12345678,
//       city:"guntur"
//     }
//   }
//   return(
//     <>
//       <Navbar obj = {obj}/>
//       {/* <Home/>
//       <About/>
//       <Skills/> */}
//     </>
//   )
// }

// export default App


import React from 'react'
import Counter from './components/Counter'
import Text from './components/Text'

const App = () => {
  return (
    <div>
      <Text/>
      {/* <Counter/> */}
    </div>
  )
}

export default App