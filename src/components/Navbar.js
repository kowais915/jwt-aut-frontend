import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
// import {colorContext } from '../context/colorContext';
import {useContext} from 'react';
import {useLogout } from '../hooks/useLogout';
import Button from '@mui/material/Button';
import { useAuthContext } from '../hooks/useAuthContext';
import Switch from '@mui/material/Switch';
import {useState } from 'react';
import { colorContext } from '../context/colorContext';




const Navbar = () => {
    const {logout} = useLogout();
    const {user } = useAuthContext();
    const {color, changeColor } = useContext(colorContext);
    // const {color, changeColor } = colorContext();
    const [checked, setChecked] = useState(false);

    const handleChange = (e)=>{
        setChecked(e.target.checked);
        
    }
  


    

    return (
        <nav className={styles.container} 

         style={{background: color}}
         onClick={()=>{
            if(!checked){
                changeColor('blue')

            }else{
                changeColor('black')
            }
            
         }}
        >

            <div className="brand">
                Auth System
            </div>

            <div className="links">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                {(user) ? <span></span>:
                
                <NavLink to="/login">Login</NavLink>

                }

                {(user) ? <span></span>: <NavLink to="/signup">Sign up</NavLink>

                }

                {user && <span>{user.email}</span>}
                { (user == null) ? <span></span>: <Button 
                    variant='contained'
                    onClick={logout}
                
                >Logout</Button>}

                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                
                
            </div>
            
        </nav>
      );
}
 
export default Navbar;