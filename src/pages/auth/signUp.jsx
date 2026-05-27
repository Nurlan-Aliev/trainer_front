import styles from './auth.module.css'
import { PasswordInput } from "../../component/inputComponents/passwordInput";
import { InputData } from "../../component/inputComponents/inputComponent";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useTranslation } from "react-i18next";
import PushDemo from "../../component/notification/notification";
import { usePushMessage } from "../../hook/usePushMessage";



export function SignUp() {
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const { t } = useTranslation();

    const { signUp, token } = useAuth();
    const { showNotification } = usePushMessage();

    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from?.pathname || '/';


    if (token) {
        return <Navigate to={fromPage} state={{ from: location }} />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await signUp({ name, login, password });

        if (result.success) {
            navigate(fromPage);

        } else {
            showNotification(result.detail);
        }
    }

    return (
        <div>
            <PushDemo />
            <div className={styles.container}>
                <h2 className={styles.title}>{t('signUp')}</h2>

                <form className='w-5' onSubmit={handleSubmit}>

                    <InputData
                        name={'name'}
                        type={'text'}
                        placeholder={t('enterYourName')}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputData
                        name={'login'}
                        type={'email'}
                        placeholder={t('enterYourEmail')}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                    <PasswordInput
                        placeholder={t('enterYourPassword')}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.submit_button}>{t('signUp')}</button>
                </form>

                <div className={styles.new_user}>
                    {t('haveAccount')}
                    <a href="/sign_in" className={styles.sign_up_link}>{t('signIn')}</a>
                </div>
            </div>
        </div>
    )
}