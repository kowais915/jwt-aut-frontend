import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import {useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

    const {color, changeColor} = useContext(AuthContext);
    return (
        <nav className={styles.container} style={{background: color}}
        
        
            onClick={()=>{
                changeColor('red');
            }}
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
                
            </div>
            
        </nav>
      );
}
 
export default Navbar;