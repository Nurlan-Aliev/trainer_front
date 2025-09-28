import styles from './auth.module.css'
import {PasswordInput} from "../../component/authForm/inputComponents/passwordInput";
import {SubmitButton} from "../../component/authForm/button/submitButton";
import {InputData} from "../../component/authForm/inputComponents/inputComponent";
import {useState} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";


export function SignUp() {
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const {signUp, token} = useAuth();
    const location = useLocation();
    const fromPage =  location.state?.from?.pathname || '/';

    if (token) {
        return <Navigate to={fromPage}  state={{from: location}}/>;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const result = await signUp({name, login, password});

        if (result.success){
            navigate(fromPage);
        } else{
            setLoginError(result.detail);}}

    return (
        <div className={styles.container}>
            <div className={styles.container_sign_in}>
                <h2 className={styles.title}>Sign Up</h2>

                <div className={styles.errorBox}>{loginError}</div>

                <form className={styles.form_style} onSubmit={handleSubmit}>

                    <InputData
                        name={'name'}
                        type={'text'}
                        placeholder={'Enter your name'}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputData
                        name={'login'}
                        type={'email'}
                        placeholder={'Enter your email'}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                    <PasswordInput
                        placeholder={'Enter your password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <SubmitButton name={'Sign Up'}/>
                </form>

                <div className={styles.new_user}>
                    I have account!
                    <button onClick={()=>navigate('/sign_in', {replace: true})} className={styles.sign_up_link}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}