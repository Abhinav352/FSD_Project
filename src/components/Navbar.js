import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Ddashboard from './Ddashboard';
import './Style.css';
import NewMenu from './Menu';

const Navbar = () => {
  const nav = {
    boxShadow: '1px 2px 9px #000',
   // background: 'rgb(63,94,251)',
   //background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
   background:'#fff'
  };
const isAdmin=localStorage.getItem("isAdmin")
const authenticated=localStorage.getItem("authenticated")
const navigate = useNavigate()
console.log(isAdmin);
if(!authenticated)
{
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className='navbar' style={nav} >
        <Toolbar>
        {/* <IconButton className='sty1'
            size="large" 
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton> */}
          <Typography variant="h6" className='typo' component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} className='pog' style={{textDecoration: 'none'}} sx={{color:'#eeeee4'}}>Home</Link>
          </Typography>
          <Button color="inherit" ><Link to={"/login"} className='nog' style={{textDecoration: 'none'}} >Login</Link></Button>
          <Button color="inherit"><Link to={"/signup"} className='nog' style={{textDecoration: 'none'}}>SignUp</Link></Button>
          {/* <Button color="inherit"><Link to={"/ddashboard"} className='nog' style={{textDecoration: 'none'}}>Donors</Link></Button>
          <Button color="inherit"><Link to={"/adashboard"} className='nog' style={{textDecoration: 'none'}}>Admin</Link></Button>
          <Button  color="inherit" onClick={()=>{
            localStorage.removeItem("authenticated")
            localStorage.removeItem("token")
           
        }}
        
         >
            <Link to={"/"} className='nog' style={{textDecoration: 'none'}}>Logout</Link>
        </Button> */}

        </Toolbar>
      </AppBar>
    </Box>
  )
}

else{
  
  if(!isAdmin)
  {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className='navbar' style={nav} >
        <Toolbar>
          <NewMenu />
          <Typography variant="h6" className='typo' component="div" sx={{ flexGrow: 1,marginLeft:'45%' }}>
          <Link to={"/"} className='nog' style={{textDecoration: 'none'}} sx={{color:'#eeeee4'}}>Blood</Link>
          </Typography>
          {/* <Button color="inherit" ><Link to={"/login"} className='nog' style={{textDecoration: 'none'}} >Login</Link></Button>
          <Button color="inherit"><Link to={"/signup"} className='nog' style={{textDecoration: 'none'}}>SignUp</Link></Button> */}
          <Button color="inherit"><Link to={"/ddashboard"} className='nog' style={{textDecoration: 'none'}}>Donors</Link></Button>
          <Button  color="inherit" onClick={()=>{
            localStorage.removeItem("authenticated")
            localStorage.removeItem("token")
           
        }}>
          <Link to={"/"} className='nog' style={{textDecoration: 'none'}}>Logout</Link>
          
        </Button>
         

        </Toolbar>
      </AppBar>
    </Box>
  )

}


else
{
return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" className='navbar' style={nav} >
      <Toolbar>
        <NewMenu />
        <Typography variant="h6" className='typo' component="div" sx={{ flexGrow: 1,marginLeft:'45%' }}>
        <Link to={"/"} className='nog' style={{textDecoration: 'none'}} sx={{color:'#eeeee4'}}>Blood</Link>
        </Typography>
        {/* <Button color="inherit" ><Link to={"/login"} className='nog' style={{textDecoration: 'none'}} >Login</Link></Button>
        <Button color="inherit"><Link to={"/signup"} className='nog' style={{textDecoration: 'none'}}>SignUp</Link></Button> */}
        <Button color="inherit"><Link to={"/ddashboard"} className='nog' style={{textDecoration: 'none'}}>Donors</Link></Button>
        <Button color="inherit"><Link to={"/adashboard"} className='nog' style={{textDecoration: 'none'}}>Admin</Link></Button>
        <Button  color="inherit" onClick={()=>{
          localStorage.removeItem("authenticated")
          localStorage.removeItem("token")
         
      }}>
        <Link to={"/"} className='nog' style={{textDecoration: 'none'}}>Logout</Link>
        
      </Button>
       

      </Toolbar>
    </AppBar>
  </Box>
)

}
}
}


export default Navbar
