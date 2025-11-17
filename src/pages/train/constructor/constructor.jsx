import styles from './constructor.module.css';
import {Progress} from "../../../component/progress/progress";
import {useState} from "react";
import {Success} from "../../../component/Words/Success/Success";
import {useWords} from "../../../hook/useWord";
import {postRequest} from "../../../hoc/utils";
import {useAuth} from "../../../hook/useAuth";

export function Constructor(){
    const {token} = useAuth();
    const [inputValue, setInputValue] = useState("");
    const [change, setChange] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const {words,
        count,
        know,
        toLearn,
        currentWord,
        nextWord,
        continueBtn} = useWords('/api/constructor')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await postRequest('/api/test?test_type=constructor',{
            "user_answer": inputValue,
            "word_id": currentWord.word_id
        },token )
        setCorrectAnswer(response.detail);
        setChange(true);

    }
    const handleChange = () =>{
        nextWord()
        setInputValue("");
        setChange(false);
        setCorrectAnswer(null);
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            {currentWord?
                <div>

                    <Progress count={count} len={words.length}/>

                    <div className="d-flex align-items-center justify-content-center">
                        <div className={styles.container}>
                            <form className="d-flex align-items-center justify-content-between flex-column h-100 py-4" autocomplete="off">
                                <div className="fs-1">{currentWord.word_ru}</div>
                                {!change ?
                                    <input
                                    type='text'
                                    name='word'
                                    placeholder='Type answer here...'
                                    value={inputValue} className={styles.inputLine}
                                    onChange={(e) => setInputValue(e.target.value)}/>
                                    :
                                     correctAnswer === inputValue?
                                         <div className={styles.answer}>
                                             <div className={styles.correct}>{correctAnswer}</div>
                                         </div>:
                                        <div className={styles.answer}>
                                            <div className={styles.correct}>{correctAnswer}</div>
                                            <div className={styles.wrong}>{inputValue}</div>
                                        </div>
                                }



                                {!change ?
                                    <button className="btn btn-primary w-50" disabled={!inputValue} onClick={handleSubmit}>Check</button>:
                                    <button className="btn btn-primary w-50" onClick={handleChange}>Next Word</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
                :
                <Success
                    know_count={know}
                    toLearn_count={toLearn}
                    lenWord={words.length}
                    continueBtn={async () => {
                        await continueBtn()
                    }}
                />
            }
        </div>
    )
}