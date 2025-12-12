import styles from './WordCard.module.css'
import {BlackButton, WhiteButton} from "../buttons/Button";
import {useAuth} from "../../../hook/useAuth";
import {postRequest} from "../../../hoc/utils";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


export function WordCard({word, onClick}) {
    const {t, i18n} = useTranslation();
    const [lngWord, setLngWord] = useState('');
    const {token} = useAuth();


    const iKnowBtn = async () => {
        onClick(true)
        await postRequest('/api/learned', word, token)
    }

    const toLearnBtn = async () => {
        onClick(false)
        await postRequest('/api/to_learn', word,token)
    }

    useEffect(() => {
        if (i18n.language === 'ru'){
            setLngWord(word.word_ru)
        }else if(i18n.language === 'az'){
            setLngWord(word.word_az)
        }
    })


    return (
        <div className={styles.container}>
            <div className={styles.wordContainer}>
                <div className={styles.word}>
                    { word.word_en.charAt(0).toUpperCase() + word.word_en.slice(1) }
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