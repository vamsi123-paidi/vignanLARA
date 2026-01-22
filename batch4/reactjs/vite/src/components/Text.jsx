import React, { useState } from 'react'

const Text = () => {
    const [text,setText] = useState("")
  return (
    <div>
        <input type="text"  placeholder='write to show down' onInput={(e)=>setText(e.target.value)}/>
        <button>show text</button>
    </div>
  )
}

export default Text