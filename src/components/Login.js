import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Style.css'
import { blue } from '@mui/material/colors'
import Navbar from './Navbar'
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {Grid} from '@mui/material'
import {Paper} from '@mui/material'
import background from './images/background.jpg'
const Login = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const [authenticated, setauthenticated] = useState(null)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("authenticated");
    setauthenticated(loggedInUser)
},[])

  const handleLogin = (data) => {
    axios.post('http://localhost:6901/login',data).then((response)=>{
      console.log(response.data.user.isAdmin)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("isAdmin",response.data.user.isAdmin)
      if(response.data.user.isAdmin){
        console.log("user is Admin")
        navigate("/adashboard")
      }
      else{
        navigate("/ddashboard");
      }
    })
    .catch(()=>{
      toast.error('Invalid Credentials');
      console.log("something went wrong")
      navigate("/login")
    })
  }
  const paperStyle={padding:20,height:'50vh',width:290,margin:"1p"}
 if(!authenticated){ 
  
  return (
    <body >
    <div >
    <Navbar/>
      <Box sx={{color:'#eeeee4'}}>
      
    
      <Grid className='App' >
          <Paper elevation={15} style={paperStyle} className='col'>
        <div className='tb'>
        <div className='tt' >
         <h1 className='ll'>LOGIN</h1>  
        <TextField  className='textfield' label="Email" variant="filled" name='userEmail'
       {...register('userEmail')}/><br></br><br></br>
        <TextField className='textfield' id="outlined-basic" label="Password" variant="filled" name='userPassword'
       {...register('userPassword')} /><br></br><br></br><br></br><br></br>
         <Button className='id' variant='text'>Forgot password?</Button><br></br>
        <Button className='tl'onClick={handleSubmit(handleLogin)} variant="contained">Login</Button><br></br>
        </div>
        </div>
        </Paper>
        </Grid>
        </Box>
        </div>
        </body>
  
  )}
}

export default Login