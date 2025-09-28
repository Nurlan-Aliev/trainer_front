import settings from "../config";
import {Navigate, useLocation} from "react-router-dom";
import {sendAuthRequest} from "./utils";
import {useAuth} from "../hook/useAuth";
import {useEffect} from "react";

export function PrivateRoute ({children}) {
    const location = useLocation();
    const {token, refreshToken} = useAuth();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${settings.baseURL}/auth/me`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`}
                })
                if (!response.ok){
                    localStorage.removeItem("access_token")
                    await sendAuthRequest('/auth/refresh')
                    refreshToken()
                }

            }catch (e) {
                console.error(e);
            }
        }
        checkAuth()
    }, [token, refreshToken])

    if (!token) {
        return <Navigate to="/sign_in"  state={{from: location}}/>;

    }
    return children;
}
