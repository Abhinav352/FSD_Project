import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Style.css'
import { blue } from '@mui/material/colors'
const Login = () => {
  return (
    <div>
        <div className='tb'>
        <div className='tt'>
         <h1 className='ll'>Sign in</h1>  
        <TextField className='lb' id="oraphyutlined-basic" label="username" variant="outlined" /><br></br>
        <TextField className='sb' id="outlined-basic" label="password" variant="outlined" /><br></br>
         <Button className='id' variant='text'>forgot password?</Button>
        <Button className='tl' variant="contained">Login</Button><br></br>
        </div>
        </div>
    </div>
  )
}

export default Login