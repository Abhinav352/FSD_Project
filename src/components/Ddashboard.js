import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Request from './Request';
import Home from './Home';
import Donordash from './Donordash';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from '@mui/material'
import { CardActionArea } from '@mui/material';



  

const Ddashboard = () => {
  var [donor,setdonor] = useState([]);
  useEffect(()=>{
      axios.get('http://localhost:6901/user/view').then((response)=>{
          console.log(response)
          setdonor(donor=response.data)
      })
    },[])
  return (
  
  <div>  
   <Donordash/><br></br><br></br>
   <Grid container spacing={2}>
        {donor.map((data,ind)=>{
            return(
                <Grid xs={3}>
 <Card sx={{ maxWidth: 345 }} key={ind} className='card'>



      <CardContent >
        <div><h4>Name : {data.userName}</h4></div>
        <div><h4>Email : {data.userEmail}</h4></div>
        <div><h4>Phone : {data.userMobile}</h4></div>
        <div><h4>Blood Type: {data.userBloodGroup}</h4></div>


      </CardContent>


    </Card>
    </Grid>
    )})}</Grid>

  </div>
  )
}

export default Ddashboard

