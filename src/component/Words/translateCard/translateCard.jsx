import style from './translate.module.css'
import {useState} from "react";
import {postRequest} from "../../../hoc/utils";
import {useTranslation} from "react-i18next";


export function TranslateCard({word, nextWord, url, token, countFunc}) {
    const {t, i18n} = useTranslation();

    const [inputValue, setInputValue] = useState("");
    const [chang, setChange] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    const handleSubmit = async () =>{
        const response = await postRequest(url,{
            "id": word.word_id,
            "user_answer": inputValue
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
            <h3>{word.question}</h3>
            <div className={style.options}>
                {word.option.map((i) => {
                    let btnClass = "btn btn-primary m-1";
                    if (chang) {
                        if (i === correctAnswer) btnClass = "btn btn-success m-1";
                        else if (i === inputValue && i !== correctAnswer)
                            btnClass = "btn btn-danger m-1";
                    }
                    else if (i === inputValue) {
                        btnClass = "btn btn-warning m-1";
                    }
                    return (
                        <button
                            className={btnClass}
                            key={i}
                            onClick={() => setInputValue(i)}
                            disabled={!!correctAnswer}
                        >
                            {i}
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