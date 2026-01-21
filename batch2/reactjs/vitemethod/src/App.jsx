// import About from "./components/About"
// import Home from "./components/Home"
import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import Text from "./components/Text"
// import Skills from "./components/Skills"

function App(){
  const obj = {
    name:"adam",
    age:25,
    details:{
      dno:123,
      city:"guntur"
    }
  }

  return(
    <>
    <Text/>
    {/* <Counter/> */}
    {/* <Navbar  obj = {obj}/> */}
    {/* <Home/>
    <About/>
    <Skills/> */}
    </>
  )

}

export default App