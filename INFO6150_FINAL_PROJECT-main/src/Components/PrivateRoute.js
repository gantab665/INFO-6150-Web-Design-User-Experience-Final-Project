import { Navigate } from 'react-router-dom'
import { useAuth } from '../Pages/Auth-Context/Auth-Context';

const PrivateRoute = ({ element }) => {
    const { isUserLoggedin, userInfo } = useAuth()
    return isUserLoggedin && userInfo?.role === 'user' ? (
        element
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;