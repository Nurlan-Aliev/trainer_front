import {useTranslation} from "react-i18next";
import styles from './LanguageSwitcher.module.css'
import { useState } from "react"
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
    const {i18n } = useTranslation();


    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className={styles.lang}>
            <select
                value={i18n.language}
                onChange={handleChange}
            >
                <option value="ru">{<ReactCountryFlag countryCode="RU" />}</option>
                <option value="az">{<ReactCountryFlag countryCode="AZ" />}</option>
            </select>

        </div>
    )
}
