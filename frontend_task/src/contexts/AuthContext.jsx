import { createContext, useContext, useState } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // ham login se duoc goi ru UI
    const login = async (userData) => {
        const res = await authService('login', userData, 'POST');
        // Error php logic
        if (res.data?.success === false) {
            return { source: 'Auth', error: true, message: res.data.message };
        }
        // Error cua api
        if (res.error) {
            return res;
        }
        // dang nhap thanh cong
        const { user, token } = res.data;
        setCurrentUser(user);
        localStorage.setItem('token', token);
        return { error: false };
    }

    return (
        <AuthContext.Provider value={{ login, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };