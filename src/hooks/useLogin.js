import{ useState } from 'react'; 
import {useAuthContext} from './useAuthContext';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const useLogin = ()=>{
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   const {dispatch } = useAuthContext();


  const invalidEmail = () => toast(` ${error}`);


   const login = async (email, password)=>{
        setIsLoading(true);
        setError(null);
        

        
        const resp = await fetch('https://jwt-auth-backend-production.up.railway.app/users/login', {
            method: 'POST',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        const json = await resp.json();

        
        
        if(!resp.ok){
            console.log("Error: ", json)
            setIsLoading(false);
            setError((prev)=> prev = json.error);
            console.log(error);
            // debugger
            // invalidEmail()
        }

        if(resp.ok){

            localStorage.setItem('user', JSON.stringify(json));

            // dispatch some action
            dispatch({type:'LOGIN', payload: json});

            setIsLoading(false);

        }
   }

   return {login, isLoading, error}
}


