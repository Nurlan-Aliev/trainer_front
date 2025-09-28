import styles from "./userButton.module.css";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";


export default function UserButton() {

    const navigate = useNavigate();
    const {signOut} = useAuth();


    return (
        <button className={styles.user_button} onClick={() =>{signOut(()=>navigate('/', {replace: true}))}} >
            <img src='/images/user.png' alt='user icon'/>
        </button>
    )
}