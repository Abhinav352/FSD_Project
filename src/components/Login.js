import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Style.css'
import { blue } from '@mui/material/colors'
import Navbar from './Navbar'
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {register,handleSubmit}= useForm();
    var [result,setresult] = useState({})
    const getVal = (val)=>{
        alert('submitted')
        axios.post('http://localhost:6901/user/request',val).then((response)=>{
             setresult(result = response.data);
        })
   }


  return (
    <div >
      <Navbar/>
        <div className='tb'>
        <div className='tt' border-radius="25px">
         <h1 className='ll'>LOGIN</h1>  
        <TextField  id="oraphyutlined-basic" label="Username" variant="outlined"  name='userName'
       {...register('userName')}/><br></br>
        <TextField className='sb' id="outlined-basic" label="Password" variant="outlined" name='userPassword'
       {...register('userPassword')} /><br></br><br></br>
         <Button className='id' variant='text'>Forgot password?</Button>
        <Button className='tl'onClick={handleSubmit(getVal)} variant="contained">Login</Button><br></br>
        </div>
        </div>
    </div>
  )
}

export default Login