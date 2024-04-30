import { Navigate } from 'react-router-dom'
import { useAuth } from '../Pages/Auth-Context/Auth-Context';

const PublicRoute = ({ element }) => {
    const { isUserLoggedin } = useAuth()
    return !isUserLoggedin ? (
        element
    ) : (
        <Navigate to="/all-trips" replace />
    );
};

export default PublicRoute;