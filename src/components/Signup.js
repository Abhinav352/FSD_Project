import {  Box, Button, Checkbox , Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material'


import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Signup = () => {
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
         <h1 className='ll'>SignUp</h1>  
         <TextField className='sbs' label="Email" variant="outlined" name='userEmail'
       {...register('userEmail')}/><br></br>
        <TextField  id="oraphyutlined-basic" label="Username" variant="outlined" name='userName'
       {...register('userName')}/><br></br>
        <TextField  id="outlined-basic" label="Password" variant="outlined" name='userPassword'
       {...register('userPassword')}/><br></br><br></br>

        <Button className='tl' onClick={handleSubmit(getVal)} variant="contained">Sign Up</Button><br></br>
        </div>
        </div>
    </div>
  )
}



export default Signup;