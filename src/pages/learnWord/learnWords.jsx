import {WordCard} from "../../component/Words/WordCard/WordCard";
import styles from "./learnWoords.module.css"
import {Success} from "../../component/Words/Success/Success";
import {Progress} from "../../component/progress/progress";
import {useWords} from "../../hook/useWord";


export function LearnWords() {

    const {words,
        count,
        know,
        toLearn,
        currentWord,
        nextWord,
        continueBtn} = useWords('/api/')

    return (
        <div className={styles.container}>
            {currentWord?
                <>
                    <Progress count={count} len={words.length} />

                    <WordCard
                        key={currentWord.id}
                        word={currentWord}
                        onClick={nextWord}
                    />
                </>
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