
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Loader from "./Loader";


const Private = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default Private;