import axios from "axios";
import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { io } from "socket.io-client";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChat, setChat] = useState(null);
    // const [createChat, setCreateChat] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [message, setMessage] = useState([]);

    //send new message
    const [newMessage, setNewMessage] = useState('');

    const [socket, setSocket] = useState(null);

    //initialize socket
    useEffect(() => {
        const initSocket = io("http://localhost:3000")
        setSocket(initSocket);

        //disconnect socket when component unmounted
        return () =>{
            if (initSocket) {
                initSocket.disconnect();
            }
        }
    }, [user])

    //user connect socket room
    useEffect(() => {
        if(socket === null) return;

        socket.emit("addNewUser", user?.data?._id);

    }, [socket])

    //send message through socket
    useEffect(() => {
        const ReceiveId = currentChat?.members.find((id) => id !== user?.data?._id)

        if(socket){
            socket.emit("sendMessage", {...newMessage, ReceiveId, currentChat})
        }

    }, [newMessage])


    //receive message through socket
    useEffect(() => {
        if(socket === null) return;

        socket.on("getMessage", res => {
            if(currentChat?._id !== res.currentChat._id){
                console.log("Message not for the current chat.");
                return;
            }
            console.log("Message not for the current chat.1111");
            setMessage((prev) => [...prev, res])
        })

        return () => {
            socket.off("getMessage")
        }
    }, [socket, currentChat])

    //fetch list user chat
    useEffect(() => {
        if (user && user?.data && user?.data?._id) {
            const fetchUserChat = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/chats/${user.data._id}`, {
                        headers: {'Content-Type': 'application/json'},
                        withCredentials: true,
                        timeout: 10000
                    });
                    setChat(response);
                } catch (error) {
                    // Xử lý lỗi nếu cần
                    console.error('Error:', error);
                }
            };
            fetchUserChat();
        }
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
            setMessage(response?.data);
        };
        getMessage();
    }, [currentChat]);

    //send message 
    const handleSendMessage = useCallback(async (newMessage, sender, currentChatId, setNewMessage) => {
        try {
            const response = await axios.post('http://localhost:5000/api/messages', JSON.stringify({
                chatId: currentChatId,
                senderId: sender?.data?._id,
                text: newMessage
            }), {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
                timeout: 10000
            });
            setMessage((prev) => [...prev, response?.data]);
            setNewMessage('');
        } catch (error) {
            // Handle error
            if (error.response) {
                console.error('Response Error:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('Request Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    }, []);

    

    return <ChatContext.Provider value={{ 
        userChat,
        currentChat,
        updateCurrentChat,
        message,
        setNewMessage,
        handleSendMessage,
        newMessage
        // createChat
    }}>
        { children }
    </ChatContext.Provider>
}