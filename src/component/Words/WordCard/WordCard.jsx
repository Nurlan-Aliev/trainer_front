import styles from './WordCard.module.css'
import {BlackButton, WhiteButton} from "../buttons/Button";
import {useAuth} from "../../../hook/useAuth";
import {postRequest} from "../../../hoc/utils";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import { FiEdit } from "react-icons/fi";
import {Link} from "react-router-dom";


export function WordCard({word, onClick}) {
    const {t, i18n} = useTranslation();
    const [lngWord, setLngWord] = useState('');
    const {token} = useAuth();


    const iKnowBtn = async () => {
        onClick(true)
        await postRequest('/learned', word, token)
    }

    const toLearnBtn = async () => {
        onClick(false)
        await postRequest('/to_learn', word,token)
    }

    useEffect(() => {
        setLngWord(word.source_word)
    })


    return (
        <div className={styles.container}>
            <div className={styles.wordContainer}>
                <div className={styles.word}>
                    { word.target_word.charAt(0).toUpperCase() + word.target_word.slice(1) }
                </div>
                <div className={styles.translate}>
                    {lngWord.charAt(0).toUpperCase() + lngWord.slice(1)}
                </div>
            </div>

            <div>
                <WhiteButton onClick={iKnowBtn} name={t('alreadyKnowBtn')}/>
                <BlackButton onClick={toLearnBtn} name={t('learnBtn')}/>
            </div>
        </div>
    )
}