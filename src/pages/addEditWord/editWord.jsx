import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getRequest, postRequest} from "../../hoc/utils";
import {useAuth} from "../../hook/useAuth";
import {Loading} from "../../component/loading/loading";
import {AddEditForm} from "../../component/addEditForm/addEditForm";
import {useTranslation} from "react-i18next";
import PushDemo from "../../component/notification/notification";
import {usePushMessage} from "../../hook/usePushMessage";


export function EditWord() {
    const { t } = useTranslation();
    const { id } = useParams();
    const {token} = useAuth();
    const [loading, setLoading] = useState(true);
    const {showNotification} = usePushMessage();
    const [words, setWords] = useState({
        id: id,
        word_en: "",
        word_ru: "",
        word_az: ""
    });


    useEffect(() => {
        async function fetchWord() {
            const data = await getRequest(`/api/admin/word?id=${id}`, token);
            setWords({
                id: id,
                word_en: data.detail?.word_en ?? "",
                word_ru: data.detail?.word_ru ?? "",
                word_az: data.detail?.word_az ?? "",
            });
            setLoading(false);
        }
        fetchWord();
    }, [id, token]);

    function handleChange(e) {
        const { name, value } = e.target;

        setWords(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postRequest('/api/admin/word', words, token,'PUT' );
        showNotification(t('pushEditWord'))
    }

    if (loading) {
        return <div><Loading/></div>;
    }

    return (
        <div>
            <PushDemo />
            <AddEditForm
                title={t('editTitle')}
                words={words}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    )
}
