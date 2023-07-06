import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import {colorContext } from '../context/colorContext';
import {useContext} from 'react';
import {useLogout } from '../hooks/useLogout';
import Button from '@mui/material/Button';
import { useAuthContext } from '../hooks/useAuthContext';


const Navbar = () => {
    const {logout} = useLogout();
    const {user } = useAuthContext();

  


    

    return (
        <nav className={styles.container} 
        >

            <div className="brand">
                Auth System
            </div>

            <div className="links">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                {user && <span>{user.email}</span>}
                <Button 
                    variant='contained'
                    onClick={logout}
                
                >Logout</Button>
                
                
            </div>
            
        </nav>
      );
}
 
export default Navbar;