import React, { useState } from 'react'

const Toggle = () => {
    const [text,setText]=useState(false)
  return (
    <div>
        <p>thi is hidden text</p>
        <button onClick={()=>setText(!text)}>{text?"show":"hide"}</button>
    </div>
  )
}

export default Toggle