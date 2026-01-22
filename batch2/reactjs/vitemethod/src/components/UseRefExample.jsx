import React from 'react'
import { useRef } from 'react'

const UseRefExample = () => {
    const inputRef = useRef()
    const handleClick = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Focus input</button>
    </div>
  )
}

export default UseRefExample