import React, { useEffect, useState } from 'react'

const DependeciesExample = () => {
    const [increment,setIncrement] = useState(0)
    const [increment1,setIncrement1] = useState(2)
    const [increment2,setIncrement2] = useState(3)
    useEffect(()=>{
        console.log(increment)
        console.log(increment1)
        console.log(increment2)
    },[increment2,increment1])
  return (
    <div>
        <button onClick={()=>{setIncrement(increment+1)}}>increment by 1</button>
        <button onClick={()=>{setIncrement1(increment1+2)}}>increment by 2</button>
        <button onClick={()=>{setIncrement2(increment2+3)}}>increment by 3</button>
    </div>
  )
}

export default DependeciesExample