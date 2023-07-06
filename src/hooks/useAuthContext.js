import { useContext } from 'react';
import {authContext } from '../context/authContext';

export const useAuthContext = ()=>{
    const context = useContext(authContext);

    if(!context){
        throw Error('Wrap your root component with the context provider. Out of scope.');

    }
    return context
}

