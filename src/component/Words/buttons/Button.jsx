import styles from "./buttons.module.css";


export function WhiteButton({name, onClick}) {
    return (
        <button
            className={`${styles.button} ${styles.white}`}
            onClick={onClick}>
            {name}
        </button>)
}

export function BlackButton({name, onClick}) {
    return (
        <button
            className={`${styles.button} ${styles.black}`}
            onClick={onClick}>{name}
        </button>)
}