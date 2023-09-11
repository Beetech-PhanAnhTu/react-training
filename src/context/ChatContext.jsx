import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChat, setChat] = useState(null);
    // const [createChat, setCreateChat] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [message, setMessage] = useState(null);
    //fetch user chat
    useEffect(() => {
        const fetchUserChat = async () => {
            const response = await axios.get(`http://localhost:5000/api/chats/${user?.data?._id}`)
            setChat(response);
        };
        fetchUserChat();
    }, [user]);


    const updateCurrentChat = useCallback((chat) => {
        setCurrentChat(chat);
    }, []);

    // 
    // useEffect(() => {
    //     const getUser = async () => {
    //         const response = await axios.get(`http://localhost:5000/api/users`)
    //         const pChats = response?.data.filter((u) => {
    //             let isChatCreated = false;
                
    //             if(user?.data?._id === u?._id){
    //                 return false;
    //             }

    //             isChatCreated = userChat?.data.some((chat) => {
    //                 return chat?.members[0] === u?._id || chat?.members[1] === u?._id
    //             })

    //             return !isChatCreated;
    //         })
    //         setCreateChat(pChats);
    //     };
    //     getUser();
    // }, [userChat]);

    //get message
    useEffect(() => {
        const getMessage = async () => {
            const response = await axios.get(`http://localhost:5000/api/messages/${currentChat?._id}`);
            setMessage(response);
        };
        getMessage();
    }, [currentChat]);

    return <ChatContext.Provider value={{ 
        userChat,
        currentChat,
        updateCurrentChat,
        message
        // createChat
    }}>
        { children }
    </ChatContext.Provider>
}