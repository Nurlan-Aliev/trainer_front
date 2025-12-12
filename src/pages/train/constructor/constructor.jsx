import styles from './constructor.module.css';
import {Progress} from "../../../component/progress/progress";
import {useState} from "react";
import {Success} from "../../../component/Words/Success/Success";
import {useWords} from "../../../hook/useWord";
import {postRequest} from "../../../hoc/utils";
import {useAuth} from "../../../hook/useAuth";
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
        if (i18n.language === 'ru') {
            setLngWord(currentWord.word_ru);
        }else if(i18n.language === 'az') {
            setLngWord(currentWord.word_az);
        }
    }, [currentWord]);

    return (
        <div className="d-flex align-items-center justify-content-center">
            {currentWord?
                <div>

                    <Progress count={count} len={words.length}/>

                    <div className="d-flex align-items-center justify-content-center">
                        <div className={styles.container}>
                            <form className="d-flex align-items-center justify-content-between flex-column h-100 py-4" autocomplete="off">
                                <div className="fs-1">{lngWord}</div>
                                {!change ?
                                    <input
                                    type='text'
                                    name='word'
                                    placeholder={t('typeAnswerHere')}
                                    value={inputValue} className={styles.inputLine}
                                    onChange={(e) => setInputValue(e.target.value)}/>
                                    :
                                     correctAnswer === inputValue.toLowerCase()?
                                         <div className={styles.answer}>
                                             <div className={styles.correct}>{correctAnswer}</div>
                                         </div>:
                                        <div className={styles.answer}>
                                            <div className={styles.correct}>{correctAnswer}</div>
                                            <div className={styles.wrong}>{inputValue}</div>
                                        </div>
                                }
                                {!change ?
                                    <button className="btn btn-primary w-50" disabled={!inputValue} onClick={handleSubmit}>{t("check")}</button>:
                                    <button className="btn btn-primary w-50" onClick={handleChange}>{t('nextWord')}</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
                :
                <Success
                    know_count={correctCount}
                    toLearn_count={words.length - correctCount}
                    lenWord={words.length}
                    continueBtn={async () => {
                        await continueBtn()
                    }}
                />
            }
        </div>
    )
}