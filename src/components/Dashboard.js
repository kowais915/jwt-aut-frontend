import {useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import {Navigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Dashboard = () => {
    const [dashboard, setDashboard] = useState({});
    const {user } = useAuthContext();
    
 

    // if(user){
    //     console.log("user from dashboard: ", user);
       
    // }else{
    //     return (<Navigate to='/login'/>)
    // }

   
   

    // useEffect(()=>{
    //     const getData = async()=>{
    //         const resp = await fetch('https://jwt-auth-backend-production.up.railway.app/dashboard');
    //         const json = await resp.json();
    //         setDashboard(json);
    //     }

    //     getData();
    // }, [])
    return ( 
        <div className="dash">
            <h1>Dashboard page</h1>
            

        </div>

     );
}
 
export default Dashboard;