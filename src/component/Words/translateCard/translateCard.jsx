import style from './translate.module.css'
import {useState} from "react";
import {postRequest} from "../../../hoc/utils";
import {useTranslation} from "react-i18next";


export function TranslateCard({word, nextWord, url, token, countFunc}) {
    const {t, i18n} = useTranslation();

    const [inputValue, setInputValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    const handleSubmit = async () => {
        const response = await postRequest(url, {
            "id": word.id,
            "user_answer": inputValue
        }, token);
        setCorrectAnswer(response.detail);
        setIsChecked(true);
    }

    const handleChange = () => {
        nextWord();
        countFunc();
        setInputValue("");
        setIsChecked(false);
        setCorrectAnswer(null);
    }

    const getButtonClass = (option) => {
        if (isChecked) {
            if (option === correctAnswer) {
                return "btn btn-success m-1";
            }
            if (option === inputValue && option !== correctAnswer) {
                return "btn btn-danger m-1";
            }
            return "btn btn-primary m-1";
        }
        
        if (option === inputValue) {
            return "btn btn-warning m-1";
        }
        
        return "btn btn-primary m-1";
    }

    return (
        <div className={style.container}>
            <h3>{word.question}</h3>
            <div className={style.options}>
                {word.option.map((option) => (
                    <button
                        className={getButtonClass(option)}
                        key={option}
                        onClick={() => setInputValue(option)}
                        disabled={isChecked}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {isChecked ? (
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