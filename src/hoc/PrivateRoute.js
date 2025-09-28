import settings from "../config";
import {Navigate, useLocation} from "react-router-dom";
import {sendRequest} from "../utils";

export function PrivateRoute ({children}) {
    const location = useLocation()
    let access_token = localStorage.getItem("access_token");


    const checkAuth = async () => {
        try {
            const response = await fetch(`${settings.baseURL}/auth/me`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${access_token}`}
            })
            if (!response.ok){
                localStorage.removeItem("access_token")
                await sendRequest(`${settings.baseURL}/auth/refresh`)
            }

        }catch (e) {
            console.error(e);
        }
    }
    checkAuth()

    access_token = localStorage.getItem("access_token");

    if (!access_token) {
        return <Navigate to="/sign_in"  state={{from: location}}/>;

    }
    return children;
}
