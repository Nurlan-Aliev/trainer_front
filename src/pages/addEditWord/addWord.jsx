import {useState } from "react";
import {postRequest} from "../../hoc/utils";
import {useAuth} from "../../hook/useAuth";
import {Loading} from "../../component/loading/loading";
import {AddEditForm} from "../../component/addEditForm/addEditForm";
import {useTranslation} from "react-i18next";
import PushDemo from "../../component/notification/notification";


export function AddWord() {
    const { t } = useTranslation();
    const {token} = useAuth();
    const [words, setWords] = useState({
        word_en: "",
        word_ru: "",
        word_az: ""
    });
    const [notification, setNotification] = useState(null)

    function showNotification() {
        setNotification({
            id: Date.now(),
            text: t('pushAadWord'),
        })
    }


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
        showNotification()


    }

    return <div>
        <PushDemo notification={notification} setNotification={setNotification}/>

        <AddEditForm
            title={t('addNewWordTitle')}
            words={words}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    </div>
}
