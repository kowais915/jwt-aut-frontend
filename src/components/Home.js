import Navbar from './Navbar';
import {useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../hooks/useAuthContext';
import {useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const Home = () => {
    const {user } = useAuthContext();

    const notify = () => toast("You are logged in!");

    




    return ( 

        <div>
          

          
        
        
        </div>
     );
}
 
export default Home;