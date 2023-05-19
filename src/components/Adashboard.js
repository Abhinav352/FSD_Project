import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Request from './Request';
import Home from './Home';
import Donordash from './Donordash';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Adashboard = () => {
var [donor,setdonor] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:6901/user/view').then((response)=>{
        console.log(response)
        setdonor(donor=response.data)
    })
  },[])

  const deletDonor = (id)=>{
    const data ={_id : id};
    axios.post('http://localhost:6901/admin/delete',data)
  }

  const updateDonor = ()=>{
   
    <Request />
  }
return (

<div>  
 <Donordash/>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead>
      <TableRow className='bord'>
        <StyledTableCell align="centre" >Name</StyledTableCell>
        <StyledTableCell align="centre" >Email</StyledTableCell>
        <StyledTableCell align="centre" >Phone Number</StyledTableCell>
        <StyledTableCell align="centre" >Blood Type</StyledTableCell>
        <StyledTableCell align="centre" >Update</StyledTableCell>
        <StyledTableCell align="centre" >Delete</StyledTableCell>

       
        
      </TableRow>
    </TableHead>
    <TableBody >
      { donor.map((value,index) => (
        <StyledTableRow key={index}>
          <StyledTableCell align="centre" className='bord'>{value.userName}</StyledTableCell>
          <StyledTableCell align="centre" className='bord'>{value.userEmail}</StyledTableCell>
          <StyledTableCell align="centre" className='bord'>{value.userMobile}</StyledTableCell>
          <StyledTableCell align="centre" className='bord'>{value.userBloodGroup}</StyledTableCell>
          <StyledTableCell align="centre" className='bord'><Button variant='contained' onClick={()=>{updateDonor()}}>Update</Button></StyledTableCell>
          <StyledTableCell align="centre" className='bord'><Button variant='contained' onClick={()=>{deletDonor(value._id)}}>Delete</Button></StyledTableCell>
          
       
          
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
)
}

export default Adashboard