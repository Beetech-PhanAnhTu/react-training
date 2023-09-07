import { useReducer } from "react";
import chatContext from "./ChatContext";
import reducer, { innitState } from "./reducer";


export default function ChatProvider ({children}){
    const [state, dispatch] = useReducer(reducer, innitState);

    return (
        <chatContext.Provider value={[state, dispatch]}>
            {children}
        </chatContext.Provider>
    );
}