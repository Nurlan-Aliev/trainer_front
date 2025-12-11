import style from './translate.module.css'
import {useState} from "react";
import {postRequest} from "../../../hoc/utils";


export function TranslateCard({word, nextWord, url, token, countFunc}) {
    const [inputValue, setInputValue] = useState("");
    const [chang, setChange] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const questionLanguage = url === '/api/translate' ? 'word_en' : 'word_ru';
    const answerLanguage = url === '/api/translate' ? 'word_ru' : 'word_en';

    const handleSubmit = async () =>{
        const response = await postRequest(url,{
            "user_answer": inputValue,
            "word_id": word.word_id,
            "language": "word_ru"
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
            <div className={style.grid}>
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
                <button className="btn btn-primary w-50" onClick={handleChange}>
                    Next Word
                </button>
            ) : (
                <button
                    className="btn btn-primary w-50"
                    disabled={!inputValue}
                    onClick={handleSubmit}
                >
                    Check
                </button>
            )}
        </div>
    );
}