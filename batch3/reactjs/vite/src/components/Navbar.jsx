import React from 'react'
import Home from './Home'
import "../App.css"
const style = {
  background:"red"
}
const Navbar = ({obj}) => {
  return (
    <div>Navbar
      <h1 style={{background:"red"}}>hello nav !</h1>
        <Home obj = {obj}/>
        <h2 style={style}>hello internal</h2>
        <h3 className='heading'>helllo class</h3>
    </div>
  )
}

export default Navbar