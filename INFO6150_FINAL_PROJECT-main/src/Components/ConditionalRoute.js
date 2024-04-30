import { Navigate } from 'react-router-dom'
import { useAuth } from '../Pages/Auth-Context/Auth-Context';

const PrivateRoute = ({ element }) => {
    const { isUserLoggedin, role } = useAuth()
    return isUserLoggedin && role && role === 'user' ? (
        element
    ) : (
        <Navigate to="/login" replace />
    );
};

const PublicRoute = ({ element }) => {
    const { isUserLoggedin } = useAuth()
    return !isUserLoggedin ? (
        element
    ) : (
        <Navigate to="/all-trips" replace />
    );
};

const AdminRoute = ({ element }) => {
    const { isUserLoggedin, role } = useAuth();
    return isUserLoggedin && role && role === 'admin' ? (
        element
    ) : (
        <Navigate to="/all-trips" replace />
    );
};

export { AdminRoute, PublicRoute, PrivateRoute }