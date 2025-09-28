import styles from './header.module.css';
import UserButton from "../Buttons/userButton";
import {Link} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";

export function Header() {
    const {token} = useAuth();


    return <header>
        <h2><Link to="/">Trainer</Link></h2>
        { token ?
            <>
                <div className={styles.menu}>
                    <div><Link to="/learn">Learn word</Link></div>
                    <div><Link to="/train_list">Train</Link></div>
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