import styles from './remember.module.css';
import {useEffect, useState} from "react";
import {useWords} from "../../../hook/useWord";
import {postRequest} from "../../../hoc/utils";
import {useAuth} from "../../../hook/useAuth";
import {useTranslation} from "react-i18next";
import {TrainParent} from "../../../component/trainParent/train";


export function Remember(){
    const {t, i18n} = useTranslation();

    const {token} = useAuth();

    const [correctAnswer, setCorrectAnswer] = useState('');
    const [countRemember, setCountRemember] = useState(0);
    const [lngWord, setLngWord] = useState("");
    const [inEnWord, setInEnWord] = useState(null);


    const {
        words,
        count,
        currentWord,
        nextWord,
        continueBtn} = useWords('/remember')


    const handleSubmit = async (e, remember) => {
        e.preventDefault();
        const response =await postRequest('/remember',{
            "word_id": currentWord.word_id,
            "remember": remember
        },token )
        setCorrectAnswer(response.detail);
        if (remember ){
            setCountRemember(countRemember + 1)
        }
    }
    const handleChange = () =>{
        nextWord()
        setCorrectAnswer(null);
    }

    useEffect(() => {
        setInEnWord(currentWord?.word_en);
        if (i18n.language === 'ru' && currentWord){
            setLngWord(currentWord.word_ru)
        }else if(i18n.language === 'az' && currentWord){
            setLngWord(currentWord.word_az)
        }
    })

    return (
        <TrainParent
            child={
                <form className="d-flex align-items-center justify-content-between flex-column h-100 py-4">
                    <div className="fs-1">{inEnWord}</div>
                    {!correctAnswer?
                        <div className="d-flex justify-content-center">

                            <button className="btn btn-primary mx-2"
                                    onClick={(e) =>
                                        handleSubmit(e,false)}
                            >{t("forgot")}</button>

                            <button className="btn btn-primary mx-2"
                                    onClick={(e) =>
                                        handleSubmit(e, true)}
                            >{t('remember')}</button>

                        </div>
                        :
                        <>
                            <div className={styles.answer}>{lngWord}</div>
                            <button className="btn btn-primary" onClick={handleChange}>
                                {t('nextWord')}
                            </button>
                        </>
                    }
                </form>}
            currentWord={currentWord}
            count={count}
            know_count={countRemember}
            toLearn_count={words.length - countRemember}
            lenWord={words.length}
            continueBtn={continueBtn}
        />
    )
}