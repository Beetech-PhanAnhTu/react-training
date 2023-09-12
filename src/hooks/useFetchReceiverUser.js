import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchReceiverUser = (chat, user) => {
    const [receiverUser, setReceiverUser] = useState(null);
    
    const ReceiveId = user == null ? chat?.chat?.members.find((id) => id !== chat?.user?.data?._id) :
                        chat?.members.find((id) => id !== user?.data?._id)
    
    useEffect(() => {
        const getUser = async () => {
            if(!ReceiveId) return null;
            const response = await axios.get(`http://localhost:5000/api/users/find/${ReceiveId}`)
            setReceiverUser(response?.data);
        }
        getUser();
    }, [ReceiveId])

    return {receiverUser};
}