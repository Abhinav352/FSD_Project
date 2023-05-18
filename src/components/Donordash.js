import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Ddashboard from './Ddashboard';

const Donordash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1, marginLeft:'50%' }}>
            Donor
          </Typography>
          <Button color="inherit"><Link to={"/requestform"} className='nog'>Request Form</Link></Button>
          <Button color="inherit"><Link to={"/"} className='nog'>Home</Link></Button>
         

         

        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Donordash