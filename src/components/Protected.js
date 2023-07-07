import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate} from "react-router-dom";

const Protected = ({children}) => {
    const {user } = useAuthContext();
    if(!user){
        return <Navigate to='/login'/>
    }
    return children
}
 
export default Protected;