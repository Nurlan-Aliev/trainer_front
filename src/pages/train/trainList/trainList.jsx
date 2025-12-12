import styles from './trainList.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



export function TrainList() {
    const {t} = useTranslation();
    const trains = [
        { src: '/images/vocab/translate.svg', title: 'Multiple Choice Test', desc: 'Choose the correct translation from multiple options', link:'/translate', time: '5-10' },
        { src: '/images/vocab/rev_translate.svg', title: 'Multiple Choice Reverse', desc: 'Choose the correct word from multiple options',link:'/rev_translate', time: '5-10' },
        { src: '/images/vocab/constructor.svg', title: 'Fill in the Blank', desc: 'Type the English word for the given translation',link:'/constructor',time: '10-15' },
        { src: '/images/vocab/remember.svg', title: 'Remember the word', desc: 'Check if you remember the word',link:'/remember',time: '5-7' },
    ];

    return (
        <>
            <h2 className={styles.title}>Learn English Words</h2>
            <div className={styles.mainContainer}>
                {trains.map((train, i) => (
                    <div key={i} className={styles.constructor}>
                        <img src={train.src} alt="logo" />
                        <h3>{train.title}</h3>
                        <p className={styles.description}>{train.desc}</p>
                        <div className={styles.duration}>
                            <p>{t('duration')}:</p>
                            <p>{train.time} {t("min")}</p>
                        </div>
                        <Link to={train.link} className={styles.button}>{t('startTest')}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}