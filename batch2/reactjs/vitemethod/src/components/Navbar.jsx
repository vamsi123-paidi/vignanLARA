import React from 'react'
import Home from './Home'
import "../App.css"
const obje = {
  background:"red",
  color:"green"
}
const Navbar = ({obj}) => {
  return (
    <div>Navbar
      <h1 style={{background:"red",color:"white"}}>hello nav!</h1>
      <h2 style={obje}>hello inernal</h2>
        <Home obj = {obj}/>
        <h3 className='heading'>hello h3</h3>
    </div>
  )
}

export default Navbar