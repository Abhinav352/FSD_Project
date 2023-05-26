import React from 'react'
import 'react-phone-number-input/style.css'

import {  Button, TextField} from '@mui/material'
import Donordash from './Donordash';
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Grid} from '@mui/material'
import {Paper} from '@mui/material'


const Update = () => {
  //const [type, setType] = React.useState([]);
// const [value, setValue] = React.useState([]);

// const handleChange = (event) => {
//   setType(event.target.value);
// }
const {register,handleSubmit}= useForm();
  var [result,setresult] = useState({})
  const getVal = (val)=>{
      alert('submitted')
      axios.post('http://localhost:6901/admin/update',val).then((response)=>{
           setresult(result = response.data);
      })
 }
  const paperStyle={padding:20,height:'85vh',width:420,margin:"20p"}
  return (
    <div>
     <Donordash/>
     <Grid className='App'>
          <Paper elevation={15} style={paperStyle} className='col'>
      
     
        <div className='tb'>
        <h2 className='lr'>REQUEST FORM</h2>  
        
         
         <TextField className='sbs' label="Name" variant="outlined" name='userName'
       {...register('userName')}/><br></br><br></br>
        <TextField  id="oraphyutlined-basic" label="Age" variant="outlined" name='userAge'
       {...register('userAge')}/><br></br><br></br>
        <TextField  id="outlined-basic" label="Email" variant="outlined" name='userEmail'
       {...register('userEmail')} /><br></br><br></br>
        <TextField  id="outlined-basic" label="Blood Type" variant="outlined"name='userBloodGroup'
       {...register('userBloodGroup')} /><br></br><br></br>
 
    <TextField
     
     margin="normal"
     
     name='userAilments'
       {...register('userAilments')}
     label="Predefined Ailment"
     id="Ailment"
  
   /><br></br>
  
    
 
     <TextField
     margin="normal"
     
     name='userAmount'
       {...register('userAmount')}
     label="No of units"
     id="units"
     />

<br></br>
            
            
        <Button
              type="submit"
              
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 10 }}
              onClick={handleSubmit(getVal._id)}>
              Submit
            </Button>
            

        
        </div>
        
   
    </Paper>
    </Grid>
          
    </div>
  )
}

export default Update
