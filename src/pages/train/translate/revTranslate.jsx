import {Progress} from "../../../component/progress/progress";
import {Success} from "../../../component/Words/Success/Success";
import {useWords} from "../../../hook/useWord";
import styles from "./translate.module.css";
import {TranslateCard} from "../../../component/Words/translateCard/translateCard";
import {useAuth} from "../../../hook/useAuth";


export function RevTranslate(){
    const {token} = useAuth();

    const {words,
        count,
        know,
        toLearn,
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
                            <TranslateCard word={currentWord} nextWord={nextWord} url='/api/test?test_type=rev_translate' token={token}/>
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