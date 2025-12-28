import styles from './auth.module.css'
import {PasswordInput} from "../../component/authForm/inputComponents/passwordInput";
import {SubmitButton} from "../../component/authForm/button/submitButton";
import {InputData} from "../../component/authForm/inputComponents/inputComponent";
import {useState} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {useTranslation} from "react-i18next";
import PushDemo from "../../component/notification/notification";
import {usePushMessage} from "../../hook/usePushMessage";


export function SignIn(){
    const {t} = useTranslation();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {signIn, token} = useAuth();
    const location = useLocation();
    const fromPage =  location.state?.from?.pathname || '/';
    const {showNotification} = usePushMessage();

    if (token) {
        return <Navigate to={fromPage}  state={{from: location}}/>;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const result = await signIn({login, password});
        if (result.success){
            navigate(fromPage, {replace: true});
        } else{
            showNotification(result.detail)}
        }



    return <div className={styles.container}>
        <div className={styles.container_sign_in}>
            <PushDemo/>
            <h2 className={styles.title}>{t('signIn')}</h2>

            <form className={styles.form_style} onSubmit={handleSubmit}>

                <InputData
                    name={'login'}
                    type={'email'}
                    placeholder={t('enterYourEmail')} onChange={(e)=>
                    setLogin(e.target.value)}
                />

                <PasswordInput
                    placeholder={t('enterYourPassword')}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <SubmitButton name={t('signIn')} />
            </form>

            <div className={styles.new_user}>
                {t('newUser')}
                <button onClick={()=>navigate('/sign_up', {replace: true})} className={styles.sign_up_link}>
                    {t('signUp')}
                </button>
            </div>
        </div>
    </div>
}