
import {createContext, useReducer } from 'react';


export const authContext = createContext();
const authReducer = (state, action)=>{
    switch(action.type){
        case "LOGIN":
            return { user: action.payload}
        case "LOGOUT":
            return {user: null}
        default:
            return state
        
    }

}

export  function AuthProvider({children}){
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    // const login = (status)=>{
    //     dispatch({type: 'LOGIN', payload: status});

    // }

    // const signup = (status)=>{
    //     dispatch({type: 'SIGNUP', payload: status});

    // }

    console.log("Auth state: ", state);
    
    return(
        <authContext.Provider value= {{...state, dispatch}} >
            {children}
        </authContext.Provider>
    )
}


































// import {createContext, useReducer } from 'react';

// export const AuthContext = createContext();

// const AuthReducer = (state, action)=>{
//     switch(action.type){
//         case 'CHANGE_COLOR':
//             return {...state, color: action.payload}
//         default:
//             return state
//     }
// }


// export const AuthProvider = ({children })=>{

//     const [state, dispatch ] = useReducer(AuthReducer, {

//         color: 'black'
//     });

//     const changeColor = (color)=>{
//         dispatch({type: "CHANGE_COLOR", payload: color});
//     }

//     return(
//         <AuthContext.Provider value ={{...state, changeColor}}>

//             {children}

//         </AuthContext.Provider>
//     )
// }