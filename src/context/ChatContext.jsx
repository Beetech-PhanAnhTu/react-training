import axios from "axios";
import { async } from "q";
import { createContext, useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChat, setChat] = useState(null);
    // list friend to create a room chat
    const [listUserCreateChat, setListUserCreateChat] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [message, setMessage] = useState([]);
    const [userOnline, setUserOnline] = useState(null);

    //send new message
    const [newMessage, setNewMessage] = useState('');

    const [newMessageSocket, setNewMessageSocket] = useState('');

    const [socket, setSocket] = useState(null);

    const scrollRef = useRef();

    const [notifications, setNotifications] = useState([]);

    //get User Info
    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();

    console.log("notifications", notifications);

    useEffect(() => {
        (async () => {
            const getUserInfo = currentChat?.members?.find((id) => id !== user?.data?._id);
            if(getUserInfo){
                const response = await axios.get(`http://localhost:5000/api/users/find/${getUserInfo}`);
                setUserInfo(response?.data);
            }else{
                navigate('/')
            }
        })();
    }, [currentChat])

    const HandleCreateChatUser = useCallback(async(firstId, secondId) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/chats`, JSON.stringify({
                firstId: firstId,
                secondId: secondId,
            }),  {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
                timeout: 10000
            });
            // console.log(response?.data);
            setChat((prev) => [...prev, response?.data]);
        } catch (error) {
            // Handle errors from axios or socket.emit if needed
            console.error('Error:', error.message);
        }
    }, [])

    //set state for scroll chat
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [message])

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

        socket.on('userOnline', (res) => {
            setUserOnline(res)
        })

        
        return () => {
            socket.off('userOnline');
        }
    }, [socket])

    //send message through socket
    useEffect(() => {
        (async () => {
            if (socket === null) return;
            const ReceiveId = currentChat?.members.find((id) => id !== user?.data?._id);
            if (socket) {
                try {
                    socket.emit("sendMessage", { ...newMessageSocket, ReceiveId });
                } catch (error) {
                    // Handle errors from axios or socket.emit if needed
                    console.error('Error:', error.message);
                }
            }

            return () => {
                socket.off("sendMessage")
            }
        })();
    }, [newMessageSocket]);


    //receive message through socket
    useEffect(() => {
        console.log("Inside useEffect");
        if (socket === null) {
            console.log("Socket is null");
            return;
        }
        try {
            console.log("trying to receive message");
            socket.on("getMessage", (res) => {
                if(currentChat?._id !== res.chatId) return;
                
                setMessage((prev) => [...prev, res]);
            });

            //notifications
            console.log(currentChat);
            socket.on("getNotification", (res) => {
                const isNotification = currentChat?.members?.some((id) => id === res.senderId)
                if(isNotification){
                    setNotifications((prev) => [{...res, isRead: true}, ...prev]);
                }else{
                    setNotifications((prev) => [res, ...prev]);
                }
            })
        } catch (error) {
            console.log("Received error socket:", error);
        }
        
        return () => {
            socket.off("getMessage");
            socket.off("getNotification");
        };
    }, [socket, currentChat])

    //marskUserChatSeenMessage
    const marskUserChatSeenMessage = useCallback((userUnreadMessageNotification, notifications) => {
        const getNotifications = notifications?.map((noti) => {
            let notification;

            userUnreadMessageNotification?.forEach(notify => {
                if(notify?.senderId === noti?.senderId){
                    notification = {...notify, isRead: true}
                }else{
                    notification = noti
                }
            });

            return notification;
        })

        setNotifications(getNotifications);
    }, [])

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
                    setChat(response?.data);
                } catch (error) {
                    // Xử lý lỗi nếu cần
                    console.error('Error:', error);
                }
            };
            fetchUserChat();
        }
    }, [user]);


    //update chat display
    const updateCurrentChat = useCallback((chat) => {
        setCurrentChat(chat);
    }, []);

    const updateCurrentFirstChat = useCallback((chat) => {
        setCurrentChat(chat);
    }, []);

    // 
    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost:5000/api/users`)
            const UserchatRoom = response?.data.filter((u) => {
                let isChatCreated = false;
                if(user?.data?._id === u?._id){
                    return false;
                }

                // //check if users existed chatrôm
                isChatCreated = userChat?.some((chat) => {
                    return chat?.members.includes(u?._id)
                })
                console.log("isChatCreated", isChatCreated);
                return !isChatCreated;
            })
            setListUserCreateChat(UserchatRoom);
        })();
    }, [userChat]);

    //get message
    useEffect(() => {
        const getMessage = async () => {
            const response = await axios.get(`http://localhost:5000/api/messages/${currentChat?._id}`);
            setMessage(response?.data);
        };
        getMessage();
    }, [currentChat]);

    //send message 
    const handleSendMessage = useCallback(async (newMessage, sender, currentChatId) => {
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
            setNewMessageSocket(response?.data);
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

        return () => {
            socket.off("getMessage")
        }
    }, []);


    return <ChatContext.Provider value={{ 
        userChat,
        currentChat,
        updateCurrentChat,
        message,
        setNewMessage,
        handleSendMessage,
        newMessage,
        scrollRef,
        listUserCreateChat,
        HandleCreateChatUser,
        userOnline,
        userInfo,
        notifications,
        marskUserChatSeenMessage,
        updateCurrentFirstChat
    }}>
        { children }
    </ChatContext.Provider>
}