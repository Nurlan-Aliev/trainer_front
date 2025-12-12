import styles from './header.module.css';
import UserButton from "../Buttons/userButton";
import {Link} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {AvatarMenu} from "../avatarMenu/avatarMenu";
import {useState} from "react";
import {useTranslation} from "react-i18next";


export function Header() {
    const {t} = useTranslation();

    const [menu, setMenu] = useState(false);
    const {token} = useAuth();

    return <div className={styles.header}>
        <h2><Link to="/">Trainer</Link></h2>
        {token ?
            <>
                <div className={styles.menu}>
                    <div><Link to="/learn">{t('learnWord')}</Link></div>
                    <div><Link to="/train_list">{t('train')}</Link></div>
                </div>
                <UserButton
                    onclick={() => {setMenu(!menu)}}
                    onblur={() => {setMenu(false)}}/>
                <AvatarMenu active={menu}/>
            </>
        :
            <Link to="/sign_in" className={styles.sign_in}>
                {t('signIn')}
            </Link>
        }
    </div>
}