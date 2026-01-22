import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Dependencies = () => {
    const [a1,seta1] = useState(0)
    const [a2,seta2] = useState(0)
    const [a3,seta3] = useState(0)
    useEffect(()=>{
        console.log(a1)
        console.log(a2)
        console.log(a3)
    },[a1])
  return (
    <div>
        <button onClick={()=>{seta1(a1+1)}}>increment by 1</button>
        <button onClick={()=>{seta2(a2+2)}}>increment by 2</button><button onClick={()=>{seta3(a3+3)}}>increment by 3</button>
        {a1}{a2}{a3}
    </div>
  )
}

export default Dependencies