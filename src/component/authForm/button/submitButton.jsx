import styles from './submitButton.module.css'

export function SubmitButton({name}){
    return (
        <button type="submit" className={styles.submit_button}>{name}</button>
    )
}