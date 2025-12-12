import styles from './trainList.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



export function TrainList() {
    const {t} = useTranslation();
    const trains = [
        { src: '/assets/images/vocab/translate.svg', title: t('multipleChoiceTest'), desc: t('multipleChoiceDesc'), link:'/translate', time: '5-10' },
        { src: '/assets/images/vocab/rev_translate.svg', title: t('multipleChoiceReverse'), desc: t('multipleChoiceReverseDesc'),link:'/rev_translate', time: '5-10' },
        { src: '/assets/images/vocab/constructor.svg', title: t('fillInTheBlank'), desc: t('fillInTheBlankDesc'),link:'/constructor',time: '10-15' },
        { src: '/assets/images/vocab/remember.svg', title: t('rememberWord'), desc: t('rememberWordDesc'),link:'/remember',time: '5-7' },
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
                            <p>{t('duration')}</p>
                            <p>{train.time} {t("min")}</p>
                        </div>
                        <Link to={train.link} className={styles.button}>{t('startTest')}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}