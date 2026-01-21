import React, { useState } from 'react'

const Text = () => {
    const [text,setText] = useState("");
  return (
    <div>
        <input type="text" placeholder='enter to write below' onInput={(e)=>setText(e.target.value)} />
        {text}
    </div>
  )
}

export default Text