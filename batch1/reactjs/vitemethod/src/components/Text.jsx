import React, { useState } from 'react'

const Text = () => {
    const [text,setText] = useState("");
    const [data,setdata] = useState("");

  return (
    <div>
        <input type="text" placeholder='enter to write below' onInput={(e)=>setText(e.target.value)} />
        {text}
        <button onClick={()=>{setdata(text)}}>Show text</button>
        <h1>{data}</h1>
    </div>
  )
}

export default Text