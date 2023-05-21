import {  Box, Button, Checkbox , Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material'


import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';
import {Paper} from '@mui/material'

const Signup = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const handleSignup = (data) => {
    axios.post('http://localhost:6901/users',data).then((response)=>{
      console.log(response)
      navigate("/Login");
    }).catch(()=>{
      toast.error('Invalid Data');
      console.log("something went wrong")
      navigate("/Signup")
    })
  }
  const paperStyle={padding:20,height:'50vh',width:290,margin:"20p"}
  return (
    <div >
      <Navbar/>
      <Grid className='App'>
          <Paper elevation={15} style={paperStyle} className='col'>
        <div className='tb'>
        <div className='tt' border-radius="25px">
         <h1 className='ll'>SignUp</h1>  
         <TextField  className='textfield' label="Email" variant="filled" name='userEmail'
       {...register('userEmail')}/><br></br><br></br>
        <TextField  className='textfield' id="oraphyutlined-basic" label="Username" variant="filled" name='userName'
       {...register('userName')}/><br></br><br></br>
        <TextField   className='textfield'id="outlined-basic" label="Password" variant="filled" name='userPassword'
       {...register('userPassword')}/><br></br><br></br>

        <Button className='tl' onClick={handleSubmit(handleSignup)} variant="contained">Sign Up</Button><br></br>
        </div>
        </div>
        </Paper>
        </Grid>
    </div>
  )
}



export default Signup;