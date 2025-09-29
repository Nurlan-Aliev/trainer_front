import {WordCard} from "../../component/Words/WordCard/WordCard";
import styles from "./learnWoords.module.css"
import {useEffect, useState} from "react";
import {Success} from "../../component/Words/Success/Success";
import {getData} from "../../hoc/utils";
import {useAuth} from "../../hook/useAuth";


export function LearnWords() {
    const [count, setCount] = useState(0);
    const [know, setKnow] = useState(0);
    const [toLearn, setToLearn] = useState(0);
    const [words, setWords] = useState([]);
    const {token} = useAuth();





    const currentWord = words[count]

    const nextWord = (id, actionType) => {
        actionType? setKnow(know+1) : setToLearn(toLearn+1)
        setCount(count + 1);
    }

    useEffect( () => {
        const getWords = async () => {
            const response = await getData('/api/', token)
            if (response.success) {setWords(response.detail)}
        }

        getWords()
    }, [token, setWords])

    return (
        <div className={styles.container}>
            {currentWord?
                <>
                    <div>
                        <div>Прогресс: {count+1} из 10</div>
                        <progress value={count+1} max={10}></progress>
                    </div>

                    <WordCard
                        key={currentWord.id}
                        word={currentWord.word_en}
                        translate={currentWord.word_ru}
                        id={currentWord.id}
                        onClick={nextWord}
                    />
                </>
                :
                <Success know_count={know} toLearn_count={toLearn} />}

        </div>
    )
}