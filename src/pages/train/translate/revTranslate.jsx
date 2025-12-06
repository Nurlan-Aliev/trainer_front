import {Progress} from "../../../component/progress/progress";
import {Success} from "../../../component/Words/Success/Success";
import {useWords} from "../../../hook/useWord";
import styles from "./translate.module.css";
import {TranslateCard} from "../../../component/Words/translateCard/translateCard";
import {useAuth} from "../../../hook/useAuth";
import {useState} from "react";


export function RevTranslate(){
    const {token} = useAuth();
    const [correctCount, setCorrectCount] = useState(0);


    const {words,
        count,
        currentWord,
        nextWord,
        continueBtn} = useWords('/api/rev_translate')


    return (
        <div className="d-flex align-items-center justify-content-center">
            {currentWord?
                <div>

                    <Progress count={count} len={words.length}/>

                    <div className="d-flex align-items-center justify-content-center">
                        <div className={styles.container}>
                            <TranslateCard
                                word={currentWord}
                                nextWord={nextWord}
                                url='/api/test?test_type=rev_translate'
                                token={token}
                                countFunc={()=>setCorrectCount(correctCount+1)}
                            />
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