import styles from "./input.module.css";
import {useState} from "react";



export function PasswordInput({placeholder, onChange}) {
    const [type, setType] = useState(false);


    return (
        <div className={styles.input_data_container}>
            <input
                type={type ? "text" : "password"}
                name="password"
                className={styles.input_data}
                placeholder={placeholder}
                onChange={onChange}
                required
                
            />

            <img
                src="/assets/images/eye/visible.png"
                alt="eye icon"
                className={styles.eye_image_pass}
                onClick={() => setType(!type)}
                onMouseDown={e => e.preventDefault()}/>
        </div>
    )
}