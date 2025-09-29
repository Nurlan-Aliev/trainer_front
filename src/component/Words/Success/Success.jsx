import styles from "./success.module.css";
import {BlackButton, WhiteButton} from "../buttons/Button";
import {useNavigate} from "react-router-dom";



export function Success({know_count, toLearn_count, continueBtn }) {
    const navigate = useNavigate()

    const finishBtn = () =>{
        navigate('/train')
    }

    return (
        <div className={styles.success}>
            <div className={styles.checkMark}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="80"
                    viewBox="0 0 25 25"
                    fill="#50d250"
                    stroke="#147e14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
            </div>
            <h2>Отличная работа!</h2>
            <p>Вы завершили из 10 слов</p>
            <div className={styles.count}>
                <div><span>Изучено: </span><span>{know_count}</span></div>
                <div><span>Уже знаю: </span><span>{toLearn_count}</span></div>
            </div>
            <div className={styles.buttons}>
                <WhiteButton name={'Завершить'} onClick={finishBtn}/>
                <BlackButton name={'Продолжить'} onClick={continueBtn}/>
            </div>

        </div>
    )
}