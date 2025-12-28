import {useTranslation} from "react-i18next";
import styles from './LanguageSwitcher.module.css'
import * as motion from "motion/react-client"
import { useState } from "react"

export default function LanguageSwitcher() {
    const {i18n } = useTranslation();
    const [isOn, setIsOn] = useState(i18n.language === "ru");


    const toggleSwitch = () => {
        setIsOn(prev => {
            const next = !prev
            i18n.changeLanguage(next ? 'ru' : 'az')
            return next
        })
    }

    return (
        <div className={styles.lang}>
            <span>RU</span>
            <button
                className={`${styles.container} ${isOn? styles.on : styles.off}`}
                onClick={toggleSwitch}
            >
                <motion.div
                    className={styles.handle}
                    layout
                    transition={{
                        type: "spring",
                        visualDuration: 0.2,
                        bounce: 0.2,
                    }}
                />
            </button>
            <span>AZ</span>
        </div>
    )
}
