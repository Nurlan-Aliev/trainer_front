import {useContext} from "react";
import {EyeStateContext} from "../hoc/Eyes";



export function useEyeState() {
    return useContext(EyeStateContext);
};