import style from './translate.module.css'
import {useState} from "react";
import {postRequest} from "../../../hoc/utils";
import {useTranslation} from "react-i18next";


export function TranslateCard({word, nextWord, url, token, countFunc}) {
    const {t, i18n} = useTranslation();

    const [inputValue, setInputValue] = useState("");
    const [chang, setChange] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const questionLanguage = url === '/translate' ? 'word_en' : `word_${i18n.language}`;
    const answerLanguage = url === '/translate' ? `word_${i18n.language}` : 'word_en';

    const handleSubmit = async () =>{
        const response = await postRequest(url,{
            "user_answer": inputValue,
            "word_id": word.word_id,
            "language": `word_${i18n.language}`
        },token )
        setCorrectAnswer(response.detail);
        setChange(true);
    }

    const handleChange = () =>{
        nextWord()
        countFunc()
        setInputValue("");
        setChange(false);
        setCorrectAnswer(null);
    }

    return (
        <div className={style.container}>
            <h3>{word.question[questionLanguage]}</h3>
            <div className={style.options}>
                {word.options.map((i) => {
                    let btnClass = "btn btn-primary m-1";
                    if (chang) {
                        if (i[answerLanguage] === correctAnswer) btnClass = "btn btn-success m-1";
                        else if (i[answerLanguage] === inputValue && i !== correctAnswer)
                            btnClass = "btn btn-danger m-1";
                    }
                    else if (i[answerLanguage] === inputValue) {
                        btnClass = "btn btn-warning m-1";
                    }
                    return (
                        <button
                            className={btnClass}
                            key={i}
                            onClick={() => setInputValue(i[answerLanguage])}
                            disabled={!!correctAnswer}
                        >
                            {i[answerLanguage]}
                        </button>
                    );
                })}
            </div>
            {chang ? (
                <button className="btn btn-primary" onClick={handleChange}>
                    {t('nextWord')}
                </button>
            ) : (
                <button
                    className="btn btn-primary"
                    disabled={!inputValue}
                    onClick={handleSubmit}
                >
                    {t('check')}
                </button>
            )}
        </div>
    );
}