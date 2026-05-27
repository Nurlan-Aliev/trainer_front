import styles from './auth.module.css'
import { PasswordInput } from "../../component/inputComponents/passwordInput";
import { InputData } from "../../component/inputComponents/inputComponent";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useTranslation } from "react-i18next";
import PushDemo from "../../component/notification/notification";
import { usePushMessage } from "../../hook/usePushMessage";


export function SignIn() {
    const { t } = useTranslation();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const { showNotification } = usePushMessage();
    const { signIn, token } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';


    if (token) {
        return <Navigate to={fromPage} state={{ from: location }} />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn({ login, password });
        if (result.success) {
            navigate(fromPage, { replace: true });
        } else {
            showNotification(result.detail)
        }
    }


    return (
        <div>
            <PushDemo />
            <div className={styles.container}>

                <h2 className={styles.title}>{t('signIn')}</h2>

                <form className='w-5' onSubmit={handleSubmit}>

                    <InputData
                        name={'login'}
                        type={'email'}
                        placeholder={t('enterYourEmail')} onChange={(e) =>
                            setLogin(e.target.value)}
                    />

                    <PasswordInput
                        placeholder={t('enterYourPassword')}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.submit_button}>{t('signIn')}</button>
                </form>

                <div className={styles.new_user}>
                    {t('newUser')}
                    <a href="/sign_up" className={styles.sign_up_link}>{t('signUp')}</a>
                </div>
            </div>
        </div>
    )
}