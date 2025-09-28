import styles from './header.module.css';
import UserButton from "../userButton/userButton";
import {Link} from "react-router-dom";

export function Header() {

    const token = localStorage.getItem("access_token");


    return <header>
        <h2><a href="/">Trainer</a></h2>
        { token ?
            <>
                <div className={styles.menu}>
                    <div><Link to="/learn">Learn word</Link></div>
                    <div><a href="/train_list">Train</a></div>
                </div>
                <UserButton/>
            </>
        :
            <Link to="/sign_in" className={styles.sign_in}>
                Sign In
            </Link>

        }
    </header>
}