import {createContext, useReducer } from 'react';

export const AuthContext = createContext();

const AuthReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        default:
            return state
    }
}


export const AuthProvider = ({children })=>{

    const [state, dispatch ] = useReducer(AuthReducer, {

        color: 'black'
    });

    const changeColor = (color)=>{
        dispatch({type: "CHANGE_COLOR", payload: color});
    }

    return(
        <AuthContext.Provider value ={{...state, changeColor}}>

            {children}

        </AuthContext.Provider>
    )
}