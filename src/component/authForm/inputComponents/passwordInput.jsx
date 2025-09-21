import styles from "./input.module.css";
import {useState} from "react";

export function PasswordInput({placeholder, onChange}) {
    const [visible, setVisible] = useState(true);

    const hideShowSwitcher = ()=> {
        setVisible(!visible);
    }

    return (
        <div className={styles.input_data_container}>
            <input
                type={visible  ? 'password' : 'text'}
                name="password"
                className={styles.input_data}
                placeholder={placeholder}
                onChange={onChange}
                required
            />

            <img
                src={visible ? "/images/eye/hide.svg" : "/images/eye/show.svg"}
                alt={visible? "hide":"show"}
                className={styles.eye_image_pass}
                onClick={hideShowSwitcher}/>
        </div>
    )
}