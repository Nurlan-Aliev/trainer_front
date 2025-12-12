import styles from './homePage.module.css'
import {useTranslation} from 'react-i18next'



function HomePage  ()  {
    const {t} = useTranslation();


    return <div>

        <div className={styles.info}>
            <h2>{t('howItWorks')}</h2>
            <div className={styles.rules}>
                <div className={styles.rule}>
                    <h3>1</h3>
                    <p>{t('chooseTestType')}</p>
                </div>
                <div className={styles.rule}>
                    <h3>2</h3>
                    <p>{t('answerQuestions')}</p>
                </div>
                <div className={styles.rule}>
                    <h3>3</h3>
                    <p>{t('seeResults')}</p>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage;