import {useWords} from "../../../hook/useWord";
import {TranslateCard} from "../../../component/Words/translateCard/translateCard";
import {useAuth} from "../../../hook/useAuth";
import {useState} from "react";
import {TrainParent} from "../../../component/trainParent/train";


export function Translate(){
    const {token} = useAuth();
    const [correctCount, setCorrectCount] = useState(0);

    const {words,
        count,
        currentWord,
        nextWord,
        continueBtn} = useWords('/api/translate')


    return (
        <TrainParent
            child={
            <TranslateCard
                word={currentWord}
                nextWord={nextWord}
                url='/api/translate'
                token={token}
                countFunc={()=>setCorrectCount(correctCount+1)}
            />
            }
            currentWord={currentWord}
            count={count}
            know_count={correctCount}
            toLearn_count={words.length - correctCount}
            lenWord={words.length}
            continueBtn={continueBtn}
        />
    )
}