import './App.css';

import Signup from './components/Signup';
import Request from './components/Request';
import Adashboard from './components/Adashboard';
import Ddashboard from './components/Ddashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
     
    <BrowserRouter>
    
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/ddashboard'element={<Ddashboard/>}></Route>
      <Route path='/adashboard'element={<Adashboard/>}></Route>
      <Route path='/requestform'element={<Request/>}></Route>
      <Route path='/'element={<Home/>}></Route>
      
    </Routes>
 </BrowserRouter>
 
    </div>
  );
}

export default App;
