import Navbar from './Navbar';
import {useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../hooks/useAuthContext';
import {useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';


const Home = () => {
    const {user } = useAuthContext();

    const notify = () => toast("You are logged in!");

    




    return ( 
        <>
        <div className={styles.home}>
          

          <h1>Welcome, {user.email}</h1>
        
         
        </div>

        <div className={styles.para}>
             <p>You have successfully logged in. You have now access to the protected routes such as your dashboard.</p>
        </div>

        </>
     );
}
 
export default Home;