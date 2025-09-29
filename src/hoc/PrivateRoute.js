import {Navigate, useLocation} from "react-router-dom";
import {getData, sendAuthRequest} from "./utils";
import {useAuth} from "../hook/useAuth";
import {useEffect} from "react";

export function PrivateRoute ({children}) {
    const location = useLocation();
    const {token, refreshToken} = useAuth();

    useEffect( () => {

        const checkAuth = async () => {
            const response = await getData('/auth/me', token)
            if (!response.success){
                localStorage.removeItem("access_token")
                const result = await sendAuthRequest('/auth/refresh')
                if (result.success){
                    localStorage.setItem("access_token", result.detail)
                    refreshToken()
                }
            }}

        checkAuth()

    }, [token, refreshToken])

    if (!token) {
        return <Navigate to="/sign_in"  state={{from: location}}/>;

    }
    return children;
}
