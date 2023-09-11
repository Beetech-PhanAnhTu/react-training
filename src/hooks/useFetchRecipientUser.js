import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchRecipientUser = (chat) => {
    const [recipientUser, setRecipientUser] = useState(null);
    
    const recipientId = chat?.chat?.members.find((id) => id !== chat?.user?.data?._id)
    
    useEffect(() => {
        const getUser = async () => {
            if(!recipientId) return null;
            const response = await axios.get(`http://localhost:5000/api/users/find/${recipientId}`)
            setRecipientUser(response);
        }
        getUser();
    }, [recipientId])

    return {recipientUser};
}

export const useFetchRecipientUserMessage = (chat, user) => {
    const [recipientUserMessage, setRecipientUserMessage] = useState(null);

    const recipientIdMesage = chat?.members.find((id) => id !== user?.data?._id)
    useEffect(() => {
        const getUserToMessage = async () => {
            if(!recipientIdMesage){
                return null;
            }

            const response = await axios.get(`http://localhost:5000/api/users/find/${recipientIdMesage}`)
            console.log(response);
            setRecipientUserMessage(response);
        }
        getUserToMessage();
    }, [recipientIdMesage])


    return {recipientUserMessage};
}