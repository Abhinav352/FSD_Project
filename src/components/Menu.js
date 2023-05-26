import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

function NewMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        <BloodtypeIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        <MenuItem onClick={handleClose} ><Link to={"/"} className='nog' style={{textDecoration: 'none'}}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/ddashboard"} className='nog' style={{textDecoration: 'none'}}>Donors</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/requestform"} className='nog' style={{textDecoration: 'none'}}>Request Form</Link></MenuItem>
        <MenuItem onClick={()=>{
            localStorage.removeItem("authenticated")
            localStorage.removeItem("token")
           
        }} ><Link to={"/"} className='nog' style={{textDecoration: 'none'}}>Logout</Link></MenuItem>
       
      </Menu>
    </div>
  );
}
export default NewMenu