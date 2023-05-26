import React from 'react'
import Navbar from './Navbar'

import { Box, Grid, Paper, Typography } from '@mui/material'
import './Home.css'
import Background from './Background'

const Home = () => {
  // const back={
  //   // backgroundImage:'url("https://www.tutorialspoint.com/reactjs/images/reactjs-minilogo.jpg")'
      
  // }
  const paperStyle={padding:20,height:'29vh',width:350,margin:"20p"}
  return (
    <body className='loginBackground'>
    <div >
 
    <Navbar/>

    <img src={require('./images/Screenshot (79).png')} className='homeImage-1'></img>
    <img src={require('./images/Screenshot (78).png')} className='homeImage-2'></img>
    </div>
    <div>
      <Typography >
    <h2 className='tips'>
        TIPS
      </h2>
     <div className='tip-1'> Here are some tips to put your mind at ease </div>
     <div className='tip-2'> during the blood donation process :</div>
      </Typography>

      <Grid container spacing={5}>
     
      <Paper elevation={15} style={paperStyle} className='homePaper-1'>
<h2>
&ensp;

  The day before
</h2>
<ul>
<li>Have an iron-rich diet such as beans, spinach or meat, poultry.</li>
<br></br>
<li>Have a proper sleep of at least 8 hours.</li>
<br></br>

<li>Include more liquids in your diet</li>
</ul>
        </Paper>
        <Paper elevation={15} style={paperStyle} className='homePaper-2'>
<h2>
&ensp;
On the Donation day
</h2>
<ul>
<li>Do carry your identify identification forms e.g. driver’s license</li>
<br></br>

<li>Drink 2 cups of water before donating blood</li>
<br></br>

<li>Wear a half sleeve shirt so that you can easily roll it up avoid fast food before donation</li>
</ul>
        </Paper>        
        <Paper elevation={15} style={paperStyle} className='homePaper-3'>
<h2>
&ensp;
After the Donation
</h2>
<ul>
<li>Reward yourself with a snack as refreshment immediately.</li>
<br></br>

<li>Drink more liquids over a period of 24 hours</li>
<br></br>

<li>Remove the bandage after few hours</li>
<br></br>

<li>Don’t do vigorous workout & give your body rest</li>
</ul>
        </Paper>   
        </Grid>          
        <br></br>   
        <br></br>   
    </div>
    </body>
  )
}

export default Home
