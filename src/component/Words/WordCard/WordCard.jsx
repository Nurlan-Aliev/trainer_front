import styles from './WordCard.module.css'
// import {sendResponseData} from "../../../hoc/utils";
import {BlackButton, WhiteButton} from "../buttons/Button";


export function WordCard({word, translate, id, onClick}) {

    const iKnowBtn = async () => {
        onClick(id, true)
        // await sendResponseData('/api/learned', {
        //     'word_en': word,
        //     'id': id
        // })
    }

    const toLearnBtn = async () => {
        onClick(id, false)
        // await sendResponseData('/api/to_learn', {
        //     'word_en': word,
        //     'id': id
        // })
    }


    return (
        <div className={styles.container}>
            <div className={styles.wordContainer}>
                <div className={styles.word}>
                    { word.charAt(0).toUpperCase() + word.slice(1) }
                </div>
                <div className={styles.translate}>
                    {translate.charAt(0).toUpperCase() + translate.slice(1)}
                </div>
            </div>

            <div>
                <WhiteButton onClick={iKnowBtn} name={'Уже знаю'}/>
                <BlackButton onClick={toLearnBtn} name={'Изучить'}/>
            </div>
        </div>
    )
}