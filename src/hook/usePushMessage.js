import {useContext} from "react";
import {PushMessageContext} from "../hoc/PushMessages";


export function usePushMessage() {
    return useContext(PushMessageContext);
}
