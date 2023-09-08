import { SEND_MESSAGE, SET_MESSAGE_INPUT } from "./constants";

const innitState = {
    message: '',
    messages: [],
    name: 'John Smith'
}

const reducer = (state, action) => {
    let newState = { };
    switch(action.type){
        case SET_MESSAGE_INPUT:
            newState = {
                ...state,
                message: action.payload
            }
            break;
        case SEND_MESSAGE:
            newState = { 
                ...state,
                message: '',
                messages: [...state.messages, action.payload]
            }
            break;
        default:
            break;
    }
    console.log(newState);
    return newState;
}

export { innitState }; 
export default reducer;