import React, { useRef } from 'react'

const UseRefExample = () => {
    const ref = useRef();
    const handleClick = ()=>{
      ref.current.focus()
    }
  return (
    <div>
        <input type="text"  ref={ref} />
        <input type="text" />
        <button onClick={handleClick}>focus</button>
    </div>
  )
}

export default UseRefExample