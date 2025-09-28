import styles from "./userButton.module.css";
import settings from "../../config";


export default function UserButton() {

    const requestSignOut = async () => {
        await fetch(`${settings.baseURL}/auth/sign_out`, {
            credentials: "include",
        })
        localStorage.removeItem('access_token');
    }

    return (
        <button className={styles.user_button} onClick={requestSignOut} >
            <img src='/images/user.png' alt='user icon'/>
        </button>
    )
}