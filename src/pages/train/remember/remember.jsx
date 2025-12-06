import styles from './remember.module.css';
import {Progress} from "../../../component/progress/progress";
import {useState} from "react";
import {Success} from "../../../component/Words/Success/Success";
import {useWords} from "../../../hook/useWord";
import {postRequest} from "../../../hoc/utils";
import {useAuth} from "../../../hook/useAuth";


export function Remember(){
    const {token} = useAuth();
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [countRemember, setCountRemember] = useState(0);

    const {words, count, currentWord, nextWord, continueBtn} = useWords('/api/remember')


    const handleSubmit = async (e, remember) => {
        e.preventDefault();
        console.log("remember", currentWord);
        console.log("remember", currentWord.id);
        const response =await postRequest('/api/remember',{
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

    return (
        <div className="d-flex align-items-center justify-content-center">
            {currentWord?
                <div>
                    <Progress count={count} len={words.length}/>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className={styles.container}>
                            <form className="d-flex align-items-center justify-content-between flex-column h-100 py-4">
                                <div className="fs-1">{currentWord.word_ru}</div>
                                {!correctAnswer?
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary w-50 mx-2" onClick={(e) => handleSubmit(e,false)}>Forgot</button>
                                        <button className="btn btn-primary w-50 mx-2" onClick={(e) => handleSubmit(e, true)}>Remember</button>
                                    </div>
                                    :
                                    <>
                                        <div>{correctAnswer}</div>
                                        <button className="btn btn-primary w-50" onClick={handleChange}>Next Word</button>
                                    </>
                                }
                            </form>
                        </div>
                    </div>
                </div>
                :
                <Success
                    know_count={countRemember}
                    toLearn_count={words.length - countRemember}
                    lenWord={words.length}
                    continueBtn={async () => {
                        await continueBtn()
                    }}
                />
            }
        </div>
    )
}