import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRouter = ({ children, preventRoles = [] }) => {
    const { currentUser } = useAuth();

    //Neu chua dang nhap chuyen sang trang login
    if (!currentUser) {
        return <Navigate to='/login' replace />
    } 
    if(preventRoles.includes(currentUser.role)){
        return <Navigate to= 'unauthorized' replace/>
    }
        // Da dang nhap
        return children;
   
}

export default ProtectedRouter;