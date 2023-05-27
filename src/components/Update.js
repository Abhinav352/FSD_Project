import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


const Update = () => {
  const {register, handleSubmit} = useForm()
  const location = useLocation();
  console.log('location',location)
  const value = location.state.value
  console.log(value.userName)
  const handleUpdate = (data) => {
    data = {...data,_id:value._id}
    console.log(`request data is: ${data._id}`)
    axios.post('http://localhost:6901/admin/update',data).then((res)=>{
        console.log(res)
        toast.success("Updated user")
    })

  }
  return (
    <div>
       <div className='update'>
      
          <Typography component="h1" variant="h5">
            Update User
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                 
                  id="Name"
                  label="Name"
                  autoFocus
                  {...register("userName")}
                  defaultValue={value.userName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                 
                  id="Age"
                  label="Age"
                  name="userAge"
                  
                  {...register("userAge")}
                  defaultValue={value.userAge}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                    
                   
                    
                    label='Email'
                    name='userEmail'
                    {...register('userEmail')}
                    defaultValue={value.userEmail}
                  >
                  </TextField>
                </Grid>
                   <Grid item xs={12} sm={6}>
                <TextField
                  
                  id="phone"
                  label="Phone"
                  name="userMobile"
                  {...register("userMobile")}
                  defaultValue={value.userMobile}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                
                  id="Blood"
                  label="Blood Group"
                  name="userBloodGroup"
                  {...register("userBloodGroup")}
                  defaultValue={value.userBloodGroup}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  
                  id="ailment"
                  label="Ailment"
                  name="userAilments"
                  {...register("userAilments")}
                  defaultValue={value.userAilments}
                />
              </Grid>
      
            </Grid>
            <Button className='button'
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='error'
              onClick={handleSubmit(handleUpdate)}
            >
              Update
            </Button>
            <Toaster/>
           
          </Box>
    </div>
    </div>
  )
}

export default Update