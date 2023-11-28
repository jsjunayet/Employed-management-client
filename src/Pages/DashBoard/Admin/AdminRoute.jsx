import { Navigate } from "react-router-dom"
import Loader from "../../../Component/ShareComponnet/Loader"
import { useRole } from "../../../Hook/Utilises"

const AdminRoute = ({ children }) => {
    const [Role, isLoading] = useRole()
    if (isLoading) {
        return <Loader></Loader>
    }

    if (Role === "Admin") {
        return children
    }
    return <Navigate to={'/dashboard'}></Navigate>
}
export default AdminRoute