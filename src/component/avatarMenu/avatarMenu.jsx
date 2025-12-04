import styles from './avatarMenu.module.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import { MdLogout } from "react-icons/md";


export function AvatarMenu({active}) {
    const navigate = useNavigate();
    const {signOut} = useAuth();


    return (
        <aside className={`${styles.menu} ${active? styles.active : ''}`}>
            <div className={styles.menu__list} >

                 <div className={styles.menu__items}
                     onClick={() =>{
                     signOut(()=>navigate('/', {replace: true}))}} >
                     <MdLogout className={styles.menu__items__icon} />
                     <span>Log out</span>
                 </div>

            </div>
        </aside>
    )
}