import { useContext } from "react";
import { AuthControl } from "../Authentication/AuthProvider";


const useAuth = () => {

    const Auth = useContext(AuthControl)
    return Auth
};

export default useAuth;