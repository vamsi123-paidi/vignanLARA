import React from 'react'
import { useState } from 'react'

const ArrayExample = () => {
    const [input,setInput] = useState("");
    const [task,setTask] = useState([])
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleClick = ()=>{
        setTask([...task,input])
    }
  return (
    <div>
        <input type="text" placeholder='add task to your list' onChange={handleChange} />
        <button onClick={handleClick}>Add task</button>

        {(task.length>0)?task.map((task)=>(
            <li>{task}</li>
        )):<p>no tasks added</p>}
    </div>
  )
}

export default ArrayExample