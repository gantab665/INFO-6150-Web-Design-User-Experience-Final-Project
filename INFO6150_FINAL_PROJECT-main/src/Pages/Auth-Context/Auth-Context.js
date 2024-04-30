import { createContext, useContext, useState, useEffect } from 'react'
import axios from '../../axios'

const AuthContext = createContext({
    token: null,
    onLogin: () => { },
    onLogout: () => { },
    isUserLoggedin: false,
    userInfo: null,
    role: null
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [role, setRole] = useState(localStorage.getItem('role') || null);
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        const getCurrentUserDetails = async () => {
            try {
                const response = await axios.get("/user/current");
                setUserInfo(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        if (token && !userInfo) {
            getCurrentUserDetails()
        }
    }, [])

    const onLogin = (userInfo) => {
        setToken(userInfo.token);
        setUserInfo({ fullName: userInfo.fullName, email: userInfo.email })
        setRole(userInfo?.role)
        localStorage.setItem('token', userInfo.token)
        localStorage.setItem('role', userInfo.role)
    }

    const onLogout = () => {
        setToken(null);
        setUserInfo(null)
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    return (
        <AuthContext.Provider value={{ token, onLogin, onLogout, isUserLoggedin: Boolean(token), userInfo, role }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}