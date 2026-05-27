import styles from './header.module.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { AvatarMenu } from "../avatarMenu/avatarMenu";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../langaugeSwitcher/LanguageSwitcher";


export function Header() {
    const { t } = useTranslation();
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const { token } = useAuth();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div className={styles.header}>
        <h2><Link to="/">Trainer</Link></h2>
        <div className={styles.menu}>
            <div><Link to="/learn">{t('learnWord')}</Link></div>
            <div><Link to="/train_list">{t('train')}</Link></div>
        </div>
        <div className="d-flex">
            <LanguageSwitcher />
            {token ?
                <>
                    <div ref={buttonRef}>
                        <button className={styles.user_button} onClick={() => {setMenu(!menu) }}>
                            <img src='/assets/images/user.png' alt='user icon' />
                        </button>

                    </div>
                    <AvatarMenu active={menu} ref={menuRef} />
                </>
                :
                <Link to="/sign_in" className={styles.sign_in}>
                    {t('signIn')}
                </Link>
            }
        </div>
    </div>
}