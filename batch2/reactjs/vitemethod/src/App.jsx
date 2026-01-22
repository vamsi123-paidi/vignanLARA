// import About from "./components/About"
// import Home from "./components/Home"
import ArrayExample from "./components/ArrayExample"
import BasicUseEffect from "./components/BasicUseEffect"
import Counter from "./components/Counter"
import Dependencies from "./components/Dependencies"
import Navbar from "./components/Navbar"
import ObjExample from "./components/ObjExample"
import Text from "./components/Text"
import Toggle from "./components/Toggle"
import UseRefExample from "./components/UseRefExample"
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
    <UseRefExample/>
    {/* <Dependencies/> */}
    {/* <BasicUseEffect/> */}
    {/* <ObjExample/> */}
    {/* <ArrayExample/> */}
    {/* <Toggle/> */}
    {/* <Text/> */}
    {/* <Counter/> */}
    {/* <Navbar  obj = {obj}/> */}
    {/* <Home/>
    <About/>
    <Skills/> */}
    </>
  )

}

export default App