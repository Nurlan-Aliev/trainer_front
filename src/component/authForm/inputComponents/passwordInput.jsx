import styles from "./input.module.css";
import {useEyeState} from "../../../hook/useEyeState";

export function PasswordInput({placeholder, onChange}) {

    const {openOneEye, closeBoth, openBoth, openOne, closeOne} = useEyeState()

    return (
        <div className={styles.input_data_container} onFocus={closeBoth} onBlur={openBoth}>
            <input
                type={!openOneEye  ? 'password' : 'text'}
                name="password"
                className={styles.input_data}
                placeholder={placeholder}
                onChange={onChange}
                required
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        openBoth();
                    }
                }}
            />

            <img
                src="/assets/images/eye/visible.png"
                alt="eye icon"
                className={styles.eye_image_pass}
                onClick={() => {openOneEye? closeOne(): openOne() }}
                onMouseDown={e => e.preventDefault()}/>
        </div>
    )
}