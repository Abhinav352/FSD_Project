import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {  Box, Button, Checkbox , Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material'


const Request = () => {
  
const [type, setType] = React.useState([]);
// const [value, setValue] = React.useState([]);

const handleChange = (event) => {
  setType(event.target.value);
}

  return (
    
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Request Form
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>

          <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
           
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="age"
              label="age"
              type="age"
              id="age"
              autoComplete="age"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="Phno"
              label="Phone Number"
              name="Phno"
              
              />
               {/* <PhoneInput
      placeholder=" phone number"
      value={value}
      onChange={setValue}/>   */}
             
            <TextField
              margin="normal"
              required
              fullWidth
              name="Blood Type"
              label="Blood Type"
              id="bloodType"
           
            />
            <FormControl fullWidth>
  <InputLabel id="userType">User Type</InputLabel>
  <Select
    id="userType"
    label="User"
    value={type}
    onChange={handleChange}
    required
  >
    <MenuItem value={2} >Donor</MenuItem>
    <MenuItem value={3}>Reciever</MenuItem>
  </Select>
</FormControl>

<div>
 
    <TextField
    Numbers
     margin="normal"
   
     fullWidth
     name="Predefined Ailment"
     label="Predefined Ailment"
     id="Ailment"
  
   />
  
    
     </div>
     <TextField
     margin="normal"
     fullWidth
     name="No of units"
     label="No of units"
     id="units"
     />


            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            
          </Box>
        </Box>
        
       
      </Container>
    
    </div>
    
  )
}

export default Request
