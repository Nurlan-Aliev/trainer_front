import styles from "./addEditForm.module.css";
import {useTranslation} from "react-i18next";


export function AddEditForm({title, words, handleChange, handleSubmit}) {
    const { t } = useTranslation();

    return (
        <div>
            <h2 className={styles.title}>{title}</h2>
            <form className={styles.editForm}>
                <div className={styles.inputBlock}>
                    <label htmlFor="word_en">{t('enWord')}</label>
                    <input
                        name="word_en"
                        value={words.word_en}
                        onChange={handleChange}
                        className={styles.editInput}
                        required
                        onBlur={(ev)=>blur(ev.target.value)}
                    />
                </div>

                <button
                    className={styles.options}
                    onClick={(el) => {
                        el.preventDefault();
                        handleChange({target:{name:'word_en', value:'hello'}})}}
                >hello</button>


                <div className={styles.inputBlock}>
                    <label htmlFor="word_ru">{t('ruWord')}</label>
                    <input
                        name="word_ru"
                        value={words.word_ru}
                        onChange={handleChange}
                        className={styles.editInput}
                        required
                    />
                </div>
                <div className={styles.inputBlock}>
                    <label htmlFor="word_az">{t('azWord')}</label>
                    <input
                        name="word_az"
                        value={words.word_az}
                        onChange={handleChange}
                        className={styles.editInput}
                        required
                    />
                </div>

                <button onSubmit={handleSubmit} className={styles.editButton}>{t("send")}</button>
            </form>
        </div>
    )
}