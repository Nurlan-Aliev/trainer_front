import styles from './header.module.css';
import settings from "../../config";
import {useEffect, useState} from "react";


export function Header() {
    const [user, setUser] = useState(false);
    // это костыль Нурлна убери это потом

    useEffect(() => {
        const checkAuth = async () => {
            console.log(settings.baseURL)
            try {
                const response = await fetch(`${settings.baseURL}/auth/me`, {
                    method: "POST",
                    credentials: "include",
                });

                if (response.ok) {
                    const data = await response.json(); // вот тут мы уже используем await
                    setUser(true);
                    console.log("response ok", data);

                } else {
                    setUser(false);
                }
            } catch (e) {
                console.error(e);
            }
        };

        // вот тут ты вызываешь функцию
        checkAuth();
    }, []);



    return <header>
        <h2><a href="/">Trainer</a></h2>
        { user ?
            <>
                <div className={styles.menu}>
                    <div><a href="/learn">Learn word</a></div>
                    <div><a href="/train_list">Train</a></div>
                </div>
                <a href="/auth/sign_out">
                    <img src="/public/images/user.png" alt="" className={styles.user_icon}/>
                </a>
            </>
        :
            <a href="/sign_in" className={styles.sign_in}>
                Sign In
            </a>

        }
    </header>
}