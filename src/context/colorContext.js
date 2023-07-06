import {createContext, useReducer } from 'react';

export const colorContext = createContext();

const colorReducer = (state, action)=>{
 
    switch(action.type){
        case "CHANGE_COLOR":
            return {...state, color: action.payload}
        default:
            return state;
        
    }

}


export function ColorProvider ({children}){
    const [state, dispatch] = useReducer(colorReducer, {
        color: 'black'
    });

    const changeColor = (color)=>{
       
        dispatch({type: "CHANGE_COLOR", payload: color});
    }

    return(
        <colorContext.Provider value={{...state, changeColor}}>

            {children}

        </colorContext.Provider>
    )
}