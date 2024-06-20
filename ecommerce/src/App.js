
import React ,{useState} from 'react';
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Buyer from './components/buyer/Buyer';

import LoginSignUp from './components/loginsignup/LoginSignUp';

const App = () => {
    return (
      <div>
     
     
     <Router>
      <Routes>
        
        <Route path = "/" element={<Navbar/>}/>
        <Route path = "/LoginSignUp" element= {<LoginSignUp/>}/>
        <Route path = "/Login" element= {<Login/>}/>
        <Route path = "/Buyer" element= {<Buyer/>}/>
      </Routes>
     </Router>
     
     </div>

    );
};

export default App;
