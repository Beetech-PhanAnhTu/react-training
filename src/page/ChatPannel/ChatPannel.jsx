import { useContext, useEffect } from "react";
import { 
    StyleFormArea,
    StyledBubble, 
    StyledButtonSend, 
    StyledChatInput, 
    StyledChatPanel, 
    StyledHeaderChat, 
    StyledInfo, 
    StyledMainChat, 
    StyledMess, 
    StyledMessImg, 
    StyledNoConversationYet, 
    StyledTime 
} from "./ChatPannel.styles";
import { ChatContext } from "../../context/ChatContext";
import { AuthContextUser } from "../../context/AuthContext";
import UserChat from "./UserChat";
import { useFetchReceiverUser } from "../../hooks/useFetchReceiverUser";

export function ChatPannel(){
    const {
        currentChat,
        message,
        setNewMessage,
        handleSendMessage,
        newMessage,
        scrollRef
    } = useContext(ChatContext);

    const {user} = useContext(AuthContextUser);


    const {receiverUser} = useFetchReceiverUser(currentChat, user);
    
    if(!receiverUser){
        return <StyledNoConversationYet>No conversation yet</StyledNoConversationYet>
    }
    return (
        <StyledChatPanel>
            <StyledHeaderChat>
                <span>{receiverUser?.name}</span>
            </StyledHeaderChat>
            <StyledMainChat>
                {message?.map((item, index) =>
                    (
                        <StyledMess key={index} ismine={item.senderId !== user?.data?._id ? 'true' : 'false'}>
                            <StyledMessImg ismine={item.senderId !== user?.data?._id ? 'true' : 'false'}></StyledMessImg>
                            <StyledBubble ismine={item.senderId !== user?.data?._id ? 'true' : 'false'}>
                                <StyledInfo>
                                    <StyledTime>
                                        12:46
                                    </StyledTime>
                                </StyledInfo>
                                <div>{item?.text}</div>
                            </StyledBubble>
                        </StyledMess>
                    )
                )}
            </StyledMainChat>
            <StyleFormArea onSubmit={(e) =>{
                e.preventDefault();
                handleSendMessage(newMessage, user, currentChat?._id, setNewMessage)
            }}>
                <StyledChatInput type="text" value={newMessage} onChange={(e) => {setNewMessage(e.target.value)}}></StyledChatInput>
                <StyledButtonSend type="submit">send</StyledButtonSend>
            </StyleFormArea>
        </StyledChatPanel>
    );
}