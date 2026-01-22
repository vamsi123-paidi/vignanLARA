import React from 'react'
import { useState } from 'react'

const ObjExample = () => {
    const [form,setForm] = useState({
        email : "",
        password:""
    })
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit =()=>{
        alert(`hello ${form.email}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter emailid' name='email' value={form.email} onChange={handleChange} />
            <input type="text" placeholder='enter emailid' name='password' value={form.password} onChange={handleChange} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ObjExample