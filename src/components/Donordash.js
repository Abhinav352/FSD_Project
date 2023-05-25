import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Ddashboard from './Ddashboard';
import './Style.css';
import NewMenu from './Menu';
const Donordash = () => {
  const nav = {
    boxShadow: '1px 2px 9px #000',
   // background: 'rgb(63,94,251)',
   //background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
   background:'#fff'
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={nav}>
        <Toolbar>
        <NewMenu />
          <Typography  variant="h6" component="div" color={'black'}  sx={{ flexGrow: 1, marginLeft:'45%' }}>
          <Link to={"/ddashboard"} className='nog' style={{textDecoration: 'none'}}>Donor</Link>
          </Typography>
          <Button color="inherit"><Link to={"/requestform"} className='nog' style={{textDecoration: 'none'}}>Request Form</Link></Button>
          <Button color="inherit"><Link to={"/"} className='nog' style={{textDecoration: 'none'}}>Home</Link></Button>
           
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Donordash