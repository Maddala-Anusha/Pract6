
import React from 'react';
import './LoginStyles.css'
import i1 from '../../assets/i1.png';
import { useState } from 'react';
import {Box,Button,TextField,styled,Typography } from '@mui/material';


const Component=styled(Box)`
    width: 400px;
    margin:auto;
    box-shadow:10px 5px 3px 2px rgb(0 0 0/0.6)`;
const Image=styled('img')
({
    width:300,
    margin:'auto',
    display:'flex',padding:'80px 0 0'
});
const Wrapper=styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction: column;
&>div,&>button,&>p{
margin-top:20px;}
`;
const LoginButton=styled(Button)
`text-transform:none;
background:#fb641b;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgv(0 0 0/20%);
`;

const SignupButton=styled(Button)
`text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgv(0 0 0/20%);
`;


const Text=styled(Typography)
`
    color:#878787;
    font-size:12px;
`;


const  Login =()=>{
  
     const [account,toggleAccount]=useState('login');
    
    const toggleSignup=()=>{
       account==='signup'? toggleAccount('login'):toggleAccount('signup');
    }
  
    return(
        <Component>
          <Box> 
          <Image src={i1}  alt="login"/> 
            {
                account==='login'?
            
            <Wrapper>                 
                    <TextField variant="standard" label="Enter username"/>
                    <TextField variant="standard" label="Enter password"/>
                  <Button variant="contained">LOGIN</Button>
                  <Button  onClick={()=>toggleSignup()}>CREATE AN ACCOUNT</Button>
            </Wrapper>:
            <Wrapper>                 
                <TextField variant="standard" label="Enter Name"/>
                  <TextField variant="standard" label="Enter Username"/>
                  <TextField variant="standard" label="Enter Password"/>

                  <SignupButton variant="contained">SignUp</SignupButton>
                  <LoginButton  onClick={()=>toggleSignup()}>Already have AN ACCOUNT</LoginButton>
            </Wrapper>
    }
            </Box>

              </Component>
    
    )
}
export default Login;