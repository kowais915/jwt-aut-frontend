import {BrowserRouter, Routes, Route, Link, NavLink, Navigate} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
// import {colorContext } from '../context/colorContext';
import {useContext} from 'react';
import {useLogout } from '../hooks/useLogout';
import Button from '@mui/material/Button';
import { useAuthContext } from '../hooks/useAuthContext';
import Switch from '@mui/material/Switch';
import {useState } from 'react';
import { colorContext } from '../context/colorContext';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const navigate = useNavigate();
    const {logout} = useLogout();
    const {user } = useAuthContext();
    const {color, changeColor } = useContext(colorContext);
    // const {color, changeColor } = colorContext();
    const [checked, setChecked] = useState(false);
    console.log("user: ", user);
    
    const notify = () => toast("You are not logged in!");

    const handleChange = (e)=>{
        setChecked(e.target.checked);
        
    }
    const handleDashClick = ()=>{
        if(localStorage.getItem('user') == null){
            notify();
        }
    }
  


    

    return (
        <nav className={styles.container} 
        
         style={{background: color}}
       
        >
            {/* <ToastContainer /> */}

            <div className="brand">
                Auth System
            </div>

            <div className="links">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                
           
                <NavLink  to="/dashboard" onClick={handleDashClick}>Dashboard</NavLink>
    
                
                {(user) ? <span></span>:
                
                <NavLink to="/login">Login</NavLink>

                }

                {(user) ? <span></span>: <NavLink to="/signup">Sign up</NavLink>

                }

                {user && <span>{user.email}</span>}
                { (user == null) ? <span></span>: <Button 
                    variant='contained'
                    onClick={()=>{
                        logout();
                        
                        if(localStorage.getItem('user') ==null){
                            navigate('/login')
                        
                        }
                    }}

                
                >Logout</Button>}

                <IconButton  aria-label="delete" size="small">
                    <DarkModeOutlinedIcon style={{color: 'white'}}></DarkModeOutlinedIcon>
                </IconButton>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onClick={()=>{
                        if(!checked){
                            changeColor('blue')
            
                        }else{
                            changeColor('black')
                        }
                        
                     }}
                />

                <IconButton>
                    <LightModeOutlinedIcon style={{color: 'blue'}}></LightModeOutlinedIcon>
                </IconButton>
                
                
            </div>
            
        </nav>
      );
}
 
export default Navbar;