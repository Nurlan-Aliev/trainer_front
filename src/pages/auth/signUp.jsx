import styles from './auth.module.css'
import {PasswordInput} from "../../component/authForm/inputComponents/passwordInput";
import {SubmitButton} from "../../component/authForm/button/submitButton";
import {InputData} from "../../component/authForm/inputComponents/inputComponent";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {sendRequest} from "../../utils";
import settings from "../../config";


export function SignUp() {
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const result = await sendRequest(
            `${settings.baseURL}/auth/sign_up`, {
                'name': name,
                'login': login,
                'password':password});

        if (result.success){
            navigate("/");
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
                    I have account! <a href="/sign_in" className={styles.sign_up_link}>Sign in</a>
                </div>
            </div>
        </div>
    )
}