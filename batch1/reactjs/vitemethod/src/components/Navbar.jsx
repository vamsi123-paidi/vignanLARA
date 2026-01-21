import React from 'react'
import Home from './Home'
const style = {
  backgroundColor:"red",
  color:"white"
}
const Navbar = ({obj}) => {
  return (
    <div className='navContainer'>Navbar
      <h1 style={{backgroundColor:"red"}}>hello navbar!</h1>
      <h2 style={style}>hello internal</h2>
      <Home obj={obj}/>
    </div>
  )
}

export default Navbar