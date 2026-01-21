import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>
        <button onClick={()=>{setCount(0)}}>reseqt</button>

    </div>
  )
}

export default Counter