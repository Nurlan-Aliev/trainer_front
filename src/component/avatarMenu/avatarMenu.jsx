import styles from './avatarMenu.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";


export function AvatarMenu({active}) {
    const navigate = useNavigate();
    const {signOut} = useAuth();


    return (
        <aside className={`${styles.menu} ${active? styles.active : ''}`}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__items}
                    onClick={() =>{
                        signOut(()=>navigate('/', {replace: true}))}} >exit</li>
            </ul>
        </aside>
    )
}