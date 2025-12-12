import styles from './avatarMenu.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import { MdLogout } from "react-icons/md";
import LanguageSwitcher from "../langaugeSwitcher/LanguageSwitcher";
import {useTranslation} from "react-i18next";
import { forwardRef } from "react";

export const AvatarMenu = forwardRef(({ active }, ref) => {
    const {t} = useTranslation();

    const navigate = useNavigate();
    const {signOut} = useAuth();


    return (
        <aside ref={ref} className={`${styles.menu} ${active? styles.active : ''}`}>
            <div className={styles.menu__list} >
                <LanguageSwitcher/>
                 <div className={styles.menu__items}
                     onClick={() =>{
                     signOut(()=>navigate('/', {replace: true}))}} >
                     <MdLogout className={styles.menu__items__icon} />
                     <span>{t('signOut')}</span>
                 </div>

            </div>
        </aside>
    )
})