import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            
        </nav>
      );
}
 
export default Navbar;