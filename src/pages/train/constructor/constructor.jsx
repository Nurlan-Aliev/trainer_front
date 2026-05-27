import styles from './constructor.module.css';
import { useState, useEffect } from "react";
import { useWords } from "../../../hook/useWord";
import { postRequest } from "../../../hoc/utils";
import { useAuth } from "../../../hook/useAuth";
import { TrainParent } from "/src/component/trainParent/train";
import { useTranslation } from "react-i18next";
import { InputData } from "../../../component/inputComponents/inputComponent";



export function Constructor() {
    const { t } = useTranslation();

    const { token } = useAuth();
    const [inputValue, setInputValue] = useState("");
    const [change, setChange] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const [toLearn_count, setToLearn_count] = useState(0);

    const { 
        words,
        count,
        currentWord,
        nextWord,
        continueBtn 
    } = useWords('/constructor')



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



    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postRequest('/constructor', {
            "user_answer": inputValue.toLowerCase(),
            "id": currentWord.id,
        }, token)
        setCorrectAnswer(response.detail);
        setChange(true);

    }
    const handleChange = () => {
        nextWord()
        if (correctAnswer === inputValue.toLowerCase()) {
            setCorrectCount(correctCount + 1);
        }else{
            setToLearn_count(toLearn_count + 1);
        }
        setInputValue("");
        setChange(false);
        setCorrectAnswer(null);
    }


    const form = (
        <form
            className="justify-center align-items-center flex-colomb  w-5"
            autoComplete="off">
            <div className="fs-1">{currentWord.source_word}</div>
            {!change ?
                <>
                    <InputData
                        type='text'
                        name='word'
                        placeholder={t('typeAnswerHere')}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

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
        </form>)



    return (
        <TrainParent
            child={form}
            currentWord={currentWord}
            count={count}
            know_count={correctCount}
            toLearn_count={toLearn_count}
            lenWord={words.length}
            continueBtn={continueBtn}
        />
    )
}