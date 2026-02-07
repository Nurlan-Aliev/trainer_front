import styles from './constructor.module.css';
import {useState, useEffect} from "react";
import {useWords} from "../../../hook/useWord";
import {postRequest} from "../../../hoc/utils";
import {useAuth} from "../../../hook/useAuth";
import {TrainParent} from "/src/component/trainParent/train";
import {useTranslation} from "react-i18next";


export function Constructor(){
    const {t, i18n} = useTranslation();

    const {token} = useAuth();
    const [inputValue, setInputValue] = useState("");
    const [change, setChange] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [correctCount, setCorrectCount] = useState(0);

    const {words,
        count,
        currentWord,
        nextWord,
        continueBtn} = useWords('/constructor')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await postRequest('/constructor',{
            "user_answer": inputValue.toLowerCase(),
            "id": currentWord.id,
        },token )
        setCorrectAnswer(response.detail);
        setChange(true);

    }
    const handleChange = () =>{
        nextWord()
        if( correctAnswer === inputValue.toLowerCase()){
            setCorrectCount(correctCount + 1);
        }
        setInputValue("");
        setChange(false);
        setCorrectAnswer(null);
    }


    if (!currentWord) {
        return (
            <TrainParent
                child={<div>Загрузка...</div>}
                count={0}
                know_count={correctCount}
                toLearn_count={0}
                lenWord={0}
                continueBtn={continueBtn}
            />
        );
    }

    return (
        <TrainParent
            child={<form
                className="d-flex align-items-center justify-content-between flex-column h-100 py-4"
                autoComplete="off">
                <div className="fs-1">{currentWord.source_word}</div>
                {!change ?
                    <>
                        <input
                            type='text'
                            name='word'
                            placeholder={t('typeAnswerHere')}
                            value={inputValue} className={styles.inputLine}
                            onChange={(e) => setInputValue(e.target.value)}/>

                        <button className="btn btn-primary" disabled={!inputValue}
                                onClick={handleSubmit}>{t("check")}</button>
                    </>
                    :
                    <>
                        <div className={styles.answer}>
                            <div className={styles.correct}>{correctAnswer}</div>

                            {correctAnswer !== inputValue.toLowerCase() && (
                            <div className={styles.wrong}>{inputValue}</div>
                            )}
                        </div>
                        <button className="btn btn-primary" onClick={handleChange}>{t('nextWord')}</button>
                    </>
                }
            </form>}
            currentWord={currentWord}
            count={count}
            know_count={correctCount}
            toLearn_count={words.length - correctCount}
            lenWord={words.length}
            continueBtn={continueBtn}
        />
    )
}