import {useState } from "react";
import {postRequest} from "../../hoc/utils";
import {useAuth} from "../../hook/useAuth";
import {AddEditForm} from "../../component/addEditForm/addEditForm";
import {useTranslation} from "react-i18next";
import PushDemo from "../../component/notification/notification";
import {usePushMessage} from "../../hook/usePushMessage";


export function AddWord() {
    const { t } = useTranslation();
    const {token} = useAuth();
    const [words, setWords] = useState({
        word_en: "",
        word_ru: "",
        word_az: ""
    });
    const {showNotification} = usePushMessage();

    function handleChange(e) {
        const { name, value } = e.target;

        setWords(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await postRequest('/api/admin/word', words, token,'POST' );
        showNotification( t('pushAadWord'))


    }

    return <div>
        <PushDemo/>
        <AddEditForm
            title={t('addNewWordTitle')}
            words={words}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    </div>
}
