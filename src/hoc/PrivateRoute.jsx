import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";


export function PrivateRoute ({children}) {
    const location = useLocation();
    const {token} = useAuth();


    if (!token) {
        return <Navigate to="/sign_in"  state={{from: location}}/>;

    }
    return children;
}
