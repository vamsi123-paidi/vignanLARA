import React, { useState } from 'react'

const Text = () => {
    const [text,setText] = useState("");
    const [data,setData] = useState("");
  return (
    <div>
        <input type="text" placeholder='write to show down' onInput={(e)=>{setText(e.target.value)}}/>
        <button onClick={()=>{setData(text)}}>view data</button>
        {data}
    </div>
  )
}

export default Text