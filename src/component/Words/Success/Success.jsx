import styles from "./success.module.css";
import {BlackButton, WhiteButton} from "../buttons/Button";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";



export function Success({know_count, toLearn_count, continueBtn, lenWord }) {
    const {t} = useTranslation();

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
            <h2>{t('greatWork')}</h2>
            {lenWord?
                <>
                    <p>{t('completedBlock')} {lenWord} {t('words')}</p>
                    <div className={styles.count}>
                        <div>{t('alreadyKnow')} {know_count}</div>
                        <div>{t('toLearn')} {toLearn_count}</div>
                    </div>
                </>:
                <div className={styles.congratulations}>
                    <p>{t('studiedAllWords')}</p>
                    <p>{t('congratulations')}</p>
                </div>


            }

            <div className={styles.buttons}>
                <WhiteButton name={t('finish')} onClick={finishBtn}/>
                <BlackButton name={t('continue')} onClick={continueBtn}/>
            </div>

        </div>
    )
}