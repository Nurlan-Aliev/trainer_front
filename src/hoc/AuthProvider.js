import {createContext, useState} from "react";
import {sendAuthRequest} from "./utils";


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

    const refreshToken = () =>{
        setToken(localStorage.getItem("access_token"));
    }

    const value = {token, signIn, signUp, signOut, refreshToken};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}