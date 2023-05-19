import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {  Box, Button, Checkbox , Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material'
import Donordash from './Donordash';
import CustomDropDown from './Usertype';
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Request = () => {
  
const [type, setType] = React.useState([]);
// const [value, setValue] = React.useState([]);

const handleChange = (event) => {
  setType(event.target.value);
}
const {register,handleSubmit}= useForm();
  var [result,setresult] = useState({})
  const getVal = (val)=>{
      alert('submitted')
      axios.post('http://localhost:6901/user/request',val).then((response)=>{
           setresult(result = response.data);
      })
 }
  return (
    
    <div>
      <Donordash/>
       
      <div >
     
        <div className='tb'>
        <h2 className='ll'>REQUEST FORM</h2>  
        <div className='tf' >
         
         <TextField className='sbs' label="Name" variant="outlined" name='userName'
       {...register('userName')}/><br></br>
        <TextField  id="oraphyutlined-basic" label="Age" variant="outlined" name='userAge'
       {...register('userAge')}/><br></br>
        <TextField  id="outlined-basic" label="Email" variant="outlined" name='userEmail'
       {...register('userEmail')} /><br></br>
        <TextField  id="outlined-basic" label="Blood Type" variant="outlined"name='userBloodGroup'
       {...register('userBloodGroup')} /><br></br>
        <FormControl className='form'>
           <InputLabel id="userType" >User Type</InputLabel>
  <Select
    id="userType"
    label="User"
    value={type}
    onChange={handleChange}
    required
   
  >
    <MenuItem value={2}  name='userType'
       {...register('userType')} >Donor</MenuItem>
    <MenuItem value={3}  name='userType'
       {...register('userType')}>Reciever</MenuItem>
  </Select>
  </FormControl>

 
    <TextField
     Numbers
     margin="normal"
     
     name='userAilments'
       {...register('userAilments')}
     label="Predefined Ailment"
     id="Ailment"
  
   />
  
    
 
     <TextField
     margin="normal"
     
     name='userAmount'
       {...register('userAmount')}
     label="No of units"
     id="units"
     />


            
            
        <Button
              type="submit"
              
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(getVal)}>
              Submit
            </Button>
            

        
        </div>
        </div>
    </div>
  
          
        
        
       
      
    
    </div>
    
  )
}

export default Request
