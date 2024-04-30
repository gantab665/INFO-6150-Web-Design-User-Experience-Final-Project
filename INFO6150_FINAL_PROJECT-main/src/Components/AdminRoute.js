import { Navigate } from 'react-router-dom'
import { useAuth } from '../Pages/Auth-Context/Auth-Context';

const AdminRoute = ({ element }) => {
    const { isUserLoggedin, role } = useAuth();
    return isUserLoggedin && role && role === 'admin' ? (
        element
    ) : (
        <Navigate to="/all-trips" replace />
    );
};

export default AdminRoute;