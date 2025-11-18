import styles from "./userButton.module.css";


export default function UserButton({onclick}) {


    return (
            <button className={styles.user_button} onClick={onclick}>
                <img src='/images/user.png' alt='user icon'/>
            </button>

    )
}