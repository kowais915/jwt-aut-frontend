import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import {useLogin } from '../hooks/useLogin';
import {useEffect } from 'react';


// using toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import{BrowserRouter, Routes, Route} 
import { useNavigate, Redirect,Route  } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


// using context



function Copyright(props) {



// // function to handle the login field
// const handleLogin = (e)=>{
//   e.preventDefault();

//   setEmail(e.target.value);

// }


// // function to handle the password field
// const handlePassword = (e)=>{
//   e.preventDefault();
//   setPassword(e.target.value);
// }


  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function  SignInSide() {
  

  const navigate = useNavigate();

  const [email, setEmail ]  = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin();
  const {user} = useAuthContext();

  const notify = () => toast("Logged in!");
  const logout = () => toast("Logged out!");
  const invalidEmail = () => toast(` ${error}`);
 
  
  const handleSubmit =   (event) => {
    event.preventDefault();
    console.log("Event:: ", event);
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    
       login(email, password);

    

   
  };



 useEffect(() => {
  if(localStorage.getItem('user')){


    notify();
    navigate('/home');
    
  }

 }, [user]);


 useEffect(() => {
  console.log("User:::: ", error);
  if(error){
    invalidEmail();
    
  }

 }, [error]);



  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // onChange={(e)=>{
                //   e.preventDefault();
                //   setEmail(e.target.value);
                // }}

                onChange={(e)=>setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange= {(e)=>setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                disabled={isLoading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
                
              >

                Sign In
               
              </Button>

              

              {/* {error && <span>{()=>{invalidEmail()}}</span>} */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}