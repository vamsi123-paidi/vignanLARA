import React,{ useEffect, useState } from 'react'

const ObjectExample = () => {
    const [form,setForm] = useState({
        email:"",
        password:""
    })
    useEffect(()=>{
        console.log(form)
    },[])
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        alert("done")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={form.email} name='email' onChange={handleChange}  placeholder='enter email' required/>
            <input type="text" value={form.password} name='password' onChange={handleChange} placeholder='enter password'/>
            <button type='submit' required>submit</button>
        </form>
    </div>
  )
}

export default ObjectExample