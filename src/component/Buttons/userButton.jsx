import styles from "./userButton.module.css";


export default function UserButton({onclick, onblur}) {
    return (
            <button className={styles.user_button} onClick={onclick} onBlur={onblur}>
                <img src='/assets/images/user.png' alt='user icon'/>
            </button>

    )
}