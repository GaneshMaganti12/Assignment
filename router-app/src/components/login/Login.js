import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

export default function Login() {

    let navigate = useNavigate()

    const[name, setName] = useState("")
    const[pass, setPass] = useState("")

    const[error, setError] = useState(false)

    const changeName = (event) =>{
        setName(event.target.value)
    }

    const changePassword = (event) =>{
        setPass(event.target.value)
    }

    const submitForm = (event) =>{
        event.preventDefault()
        if(name === "" || pass === ""){
            setError(true)
        }else{
            fetch(" http://localhost:4001/Authenticate", {method: "GET"})
            .then(res => res.json())
            .then(data => loginHome(data))
        }
    }

    const loginHome = (data) =>{
        if(data.isLogin){
            navigate("/")
            setError(false)
        }
    }

  return (
      <div className='login-card'>
        <form onSubmit={submitForm} className="form-card">
            <h1 className='title'>Login</h1>
            <div className='input-card'>
                <label htmlFor='email'>Email</label>
                <input className='form-control' id="email" value={name} type="text" onChange={changeName}/>
            </div>
            <div className='input-card'>
                <label htmlFor='password'>Password</label>
                <input className='form-control' id='password' value={pass} onChange={changePassword} type="password"/>
            </div>
            <button className='btn btn-primary button' type='submit'>Login</button>
            {error && <p className='error'>Name and password required</p>}
        </form>
      </div>
  )
}
