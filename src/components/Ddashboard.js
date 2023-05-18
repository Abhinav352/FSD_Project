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
  

const Ddashboard = () => {
  var [donor,setdonor] = useState([]);
  useEffect(()=>{
      axios.get('http://localhost:9999/course/view').then((resp)=>{
          console.log(resp)
          setdonor(donor=resp.data)
      })
      const deletedonor=(id)=>{

          axios.post("",id).then(response)
      }
  
    },[])
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
          <StyledTableCell align="centre" >bloodType</StyledTableCell>
          


         
          
        </TableRow>
      </TableHead>
      <TableBody >
        {blog.map((value,index) => (
          <StyledTableRow key={index}>
            <StyledTableCell align="centre" className='bord'>{value.id}</StyledTableCell>
            <StyledTableCell align="centre" className='bord'>{value.title}</StyledTableCell>
         
            
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default Ddashboard

