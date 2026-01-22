import React, { useEffect, useState } from 'react'

const ArrayExample = () => {
    const [input,setInput] = useState("")
    const [data,setData] = useState([])

    useEffect(()=>{
        console.log(data)
    })
    const handleClick = ()=>{
        setData([...data,input])
    }
  return (
    <div>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={handleClick}>add to list</button>
        {data?data.map((list)=>(
            <li>{list}</li>
        )):<p>no data found</p>}
    </div>
  )
}

export default ArrayExample