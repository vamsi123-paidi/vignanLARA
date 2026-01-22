import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <div>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle?"show":"hide"}</button>
    </div>
  )
}

export default Toggle