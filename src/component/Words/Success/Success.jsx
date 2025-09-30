import styles from "./success.module.css";
import {BlackButton, WhiteButton} from "../buttons/Button";
import {useNavigate} from "react-router-dom";



export function Success({know_count, toLearn_count, continueBtn, lenWord }) {
    const navigate = useNavigate()

    const finishBtn = () =>{
        navigate('/train_list')
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
            </div>
            <h2>Отличная работа!</h2>
            {lenWord?
                <>
                    <p>Вы завершили блок из {lenWord} слов</p>
                    <div className={styles.count}>
                        <div>Уже знаю: {know_count}</div>
                        <div>На изучение: {toLearn_count}</div>
                    </div>
                </>:
                <div className={styles.congratulations}>
                    <p>Вы изучили все слова!!!</p>
                    <p>Наши поздравления 🎉</p>
                </div>


            }

            <div className={styles.buttons}>
                <WhiteButton name={'Завершить'} onClick={finishBtn}/>
                <BlackButton name={'Продолжить'} onClick={continueBtn}/>
            </div>

        </div>
    )
}