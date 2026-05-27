import {useTranslation} from "react-i18next";
import styles from "./progress.module.css";


export function Progress({count, len}){
    const {t} = useTranslation();
    let width = (count+1) / len * 100

    return (
        <div className={styles.progress}>
            <div className="justify-between">
                <h2>{t('fillInTheBlankTitle')}</h2>
                <div>{t('question')} {count+1} {t('of')} {len}</div>
            </div>
            <div className={styles.progress__bar}>
                <div className={styles.fill} style={{'width': `${width}%` }}></div>
            </div>
        </div>
    )
}