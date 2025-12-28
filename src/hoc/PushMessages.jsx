import {createContext, useState} from "react";

export const PushMessageContext = createContext(null);

export const PushMessageProvider = ({ children }) => {
    const [notification, setNotification] = useState(null)

    function showNotification(text) {
        setNotification({
            id: Date.now(),
            text,
        })
    }

    function hideNotification() {
        setNotification(null);
    }

    const value = {notification, showNotification, hideNotification};
    return (
        <PushMessageContext.Provider value={value}>
            {children}
        </PushMessageContext.Provider>
    )
}
