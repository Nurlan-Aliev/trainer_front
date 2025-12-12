import {useTranslation} from "react-i18next";
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
    const { t,i18n } = useTranslation();

    const lang = {
        ru: {nativeName: 'Русский'},
        az: {nativeName: 'Azerbaijan'},
    }

    return <div className={styles.switcherLanguage}>
        {Object.keys(lang).map((lng)=>
            <button
                type='submit'
                key={lng}
                onClick={()=> i18n.changeLanguage(lng)}
                className={styles.switcherLanguage__button}
            >
                {lang[lng].nativeName}
            </button>
        )}
    </div>
}