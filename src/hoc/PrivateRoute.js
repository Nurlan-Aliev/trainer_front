import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import {useEffect} from "react";

export function PrivateRoute ({children}) {
    const location = useLocation();
    const {token, refreshToken} = useAuth();

    useEffect( () => {

        const intervalId = setInterval(refreshToken, 3 * 60 * 1000);
        return () => clearInterval(intervalId);

    }, [refreshToken])


    if (!token) {
        return <Navigate to="/sign_in"  state={{from: location}}/>;

    }
    return children;
}
