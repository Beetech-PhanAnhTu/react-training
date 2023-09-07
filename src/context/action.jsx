
const setMessage = (payload) => {
    return {
        type: SET_MESSAGE_INPUT,
        payload
    }
}
const sendMessage = (payload) => {
    return {
        type: SEND_MESSAGE,
        payload
    }
}