import React from 'react'
import About from './About'
import "../App.css"
const style = {
  background:"red"
}
const Home = ({obj}) => {
  return (
    <div>Home
      <h1 style={{background:"red"}}>hello home!</h1>
        <About obj={obj}/>
        <h2 style={style}>hello h2</h2>
        <h3 className='heading'>hello external</h3>
    </div>
  )
}

export default Home