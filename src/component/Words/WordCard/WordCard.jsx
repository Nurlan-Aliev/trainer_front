import styles from './WordCard.module.css'
import {BlackButton, WhiteButton} from "../buttons/Button";
import {useAuth} from "../../../hook/useAuth";
import {sendResponseData} from "../../../hoc/utils";


export function WordCard({word, onClick}) {
    const {token} = useAuth();

    const iKnowBtn = async () => {
        onClick(word.id, true)
        await sendResponseData('/api/learned', word, token)
    }

    const toLearnBtn = async () => {
        onClick(word.id, false)
        await sendResponseData('/api/to_learn', word,token)
    }


    return (
        <div className={styles.container}>
            <div className={styles.wordContainer}>
                <div className={styles.word}>
                    { word.word_en.charAt(0).toUpperCase() + word.word_en.slice(1) }
                </div>
                <div className={styles.translate}>
                    {word.word_ru.charAt(0).toUpperCase() + word.word_ru.slice(1)}
                </div>
            </div>

            <div>
                <WhiteButton onClick={iKnowBtn} name={'Уже знаю'}/>
                <BlackButton onClick={toLearnBtn} name={'Изучить'}/>
            </div>
        </div>
    )
}