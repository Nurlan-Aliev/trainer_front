import {createContext, useState} from "react";
import settings from "../config";


async function sendAuthRequest (url, data={}) {

    const formData = new FormData();
    for (const key in data){
        formData.append(key, data[key]);
    }

    try {
        const response = await fetch(`${settings.baseURL}${url}`, {
            method: 'POST',
            body: formData,
            credentials: "include",
        });

        const result = await response.json();

        if(response.ok){
            return {success: true, detail: result}
        }
        else{
            return {success: false, detail: result.detail}
        }
    }catch (error){
        return {success: false, detail: "We are sorry. Our server is sick"}
    }
}


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("access_token"));

    const signIn = async (data) =>{
        const result = await sendAuthRequest('/auth/login',data )
        if (result.success){
            localStorage.setItem("access_token", result.detail)
            setToken(result.detail);
        }
        return result;
    }

    const signUp = async (data) =>{
        const result = await sendAuthRequest('/auth/sign_up',data )
        if (result.success){
            localStorage.setItem("access_token", result.detail)
            setToken(result.detail);
        }
        return result;
    }

    const signOut = async (cb) =>{
        await sendAuthRequest('/auth/logout')
        localStorage.removeItem("access_token");
        setToken(null);
        cb();
    }

    const refreshToken = async () =>{
        localStorage.removeItem("access_token")
        const result = await sendAuthRequest('/auth/refresh')
        if (result.success){
            localStorage.setItem("access_token", result.detail)
            setToken(result.detail);
        }
        else{
            setToken(null);
        }
    }

    const value = {token, signIn, signUp, signOut, refreshToken};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}