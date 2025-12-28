import { useState, useEffect } from 'react';
import {useAuth} from "./useAuth";
import {getRequest} from "../hoc/utils";


export function useWords(url) {
    const [count, setCount] = useState(0);
    const [know, setKnow] = useState(0);
    const [toLearn, setToLearn] = useState(0);
    const [words, setWords] = useState([]);
    const { token } = useAuth();

    const currentWord = words[count];

    const nextWord = (actionType) => {
        actionType ? setKnow(prev => prev + 1) : setToLearn(prev => prev + 1);
        setCount(prev => prev + 1);
    };

    const continueBtn = async () => {
        const response = await getRequest(url, token);
        if (response.success) {
            setWords(response.detail);
            setCount(0);
        }
    };

    useEffect(() => {
        const getWords = async () => {
            const response = await getRequest(url, token);
            if (response.success) setWords(response.detail);
        };
        getWords();
    }, [url, token]);

    return {
        words,
        count,
        know,
        toLearn,
        currentWord,
        nextWord,
        continueBtn,
    };
}
