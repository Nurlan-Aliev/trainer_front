import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import {usePushMessage} from "../hook/usePushMessage";
import {useTranslation} from "react-i18next";


export function PrivateRoute ({children}) {
    const location = useLocation();
    const {token} = useAuth();
    const {t} = useTranslation();
    const {showNotification} = usePushMessage();




    if (!token) {
        showNotification(t('needToLogin'))
        return <Navigate to="/sign_in"  state={{from: location}}/>;

    }
    return children;
}
