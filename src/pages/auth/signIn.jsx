import styles from './auth.module.css'
import {PasswordInput} from "../../component/authForm/inputComponents/passwordInput";
import {SubmitButton} from "../../component/authForm/button/submitButton";
import {InputData} from "../../component/authForm/inputComponents/inputComponent";
import {useState} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";


export function SignIn(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const {signIn, token} = useAuth();
    const location = useLocation();
    const fromPage =  location.state?.from?.pathname || '/';

    if (token) {
        return <Navigate to={fromPage}  state={{from: location}}/>;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const result = await signIn({login, password});
        if (result.success){
            navigate(fromPage, {replace: true});
        } else{
            setLoginError(result.detail);}

        }



    return <div className={styles.container}>
        <div className={styles.container_sign_in}>
            <h2 className={styles.title}>Sign in</h2>

            <div className={styles.errorBox}>{loginError}</div>

            <form className={styles.form_style} onSubmit={handleSubmit}>

                <InputData
                    name={'login'}
                    type={'email'}
                    placeholder={'Enter your email'}
                    onChange={(e) =>setLogin(e.target.value)}
                />

                <PasswordInput
                    placeholder={`Enter your password`}
                    onChange={(e) =>setPassword(e.target.value)}
                />

                <SubmitButton name={'Sign in'}/>
            </form>

            <div className={styles.new_user}>
                New user?
                <button onClick={()=>navigate('/sign_up', {replace: true})} className={styles.sign_up_link}>
                    Sign Up
                </button>
            </div>
        </div>

    </div>
}