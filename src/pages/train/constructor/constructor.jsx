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
    const [lngWord, setLngWord] = useState("");
    
    const {words,
        count,
        currentWord,
        nextWord,
        continueBtn} = useWords('/api/constructor')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await postRequest('/api/constructor',{
            "user_answer": inputValue.toLowerCase(),
            "word_id": currentWord.word_id,
            "language": `word_${i18n.language}`
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


    useEffect(() => {
        if (i18n.language === 'ru' && currentWord){
            setLngWord(currentWord.word_ru)
        }else if(i18n.language === 'az' && currentWord){
            setLngWord(currentWord.word_az)
        }
    })

    return (
        <TrainParent
            child={<form
                className="d-flex align-items-center justify-content-between flex-column h-100 py-4"
                autoComplete="off">
                <div className="fs-1">{lngWord}</div>
                {!change ?
                    <input
                        type='text'
                        name='word'
                        placeholder={t('typeAnswerHere')}
                        value={inputValue} className={styles.inputLine}
                        onChange={(e) => setInputValue(e.target.value)}/>
                    :

                        <div className={styles.answer}>
                            <div className={styles.correct}>{correctAnswer}</div>

                            {correctAnswer !== inputValue.toLowerCase() && (
                            <div className={styles.wrong}>{inputValue}</div>
                            )}

                        </div>

                }
                {!change ?
                    <button className="btn btn-primary" disabled={!inputValue}
                            onClick={handleSubmit}>{t("check")}</button> :
                    <button className="btn btn-primary" onClick={handleChange}>{t('nextWord')}</button>
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