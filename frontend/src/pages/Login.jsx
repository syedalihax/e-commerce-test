import React, { useState } from 'react'

function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const LoginUser = (e) => {
    e.preventDefault()
    console.log(email , password);
    
  }
  return (
    <>
  <div>
      <form>
      <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password"  placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type='submit'>Login</button>
    </form>
  </div>
    </>
  )
}

export default Login