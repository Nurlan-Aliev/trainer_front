import styles from "./input.module.css";


export function InputData({ name, type, placeholder, onChange }) {
    return (
        <div className={styles.input_data_container}>
            <input
                type={type}
                name={name}
                className={styles.input_data}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </div>
        )
}
