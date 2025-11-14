import {createContext, useState} from "react";


export const EyeStateContext = createContext(null);

export const EyeProvider = ({ children }) => {
    const [openBothEyes, setOpenBothEyes] = useState(true)
    const [openOneEye, setOpenOneEye] = useState(false)

    const closeBoth = () => {
        if (openBothEyes) {
            setOpenBothEyes(false)
            setOpenOneEye(false)
        }
    }

    const openBoth = () => {
        setOpenBothEyes(true)
        setOpenOneEye(false)
    }

    const openOne = () => {
        setOpenOneEye(true)
    }

    const closeOne = () => {
        setOpenOneEye(false)
    }


    const value = {openBothEyes, openOneEye, closeBoth, openBoth, openOne, closeOne }

    return (
        <EyeStateContext.Provider value={value}>
            {children}
        </EyeStateContext.Provider>
    )
}