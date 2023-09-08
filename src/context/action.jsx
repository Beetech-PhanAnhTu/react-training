import { SEND_MESSAGE, SET_MESSAGE_INPUT } from "./constants"

export const setMessage = (payload) => {
    return {
        type: SET_MESSAGE_INPUT,
        payload
    }
}
export const sendMessage = (payload) => {
    return {
        type: SEND_MESSAGE,
        payload
    }
}