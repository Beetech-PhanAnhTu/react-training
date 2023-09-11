import { useContext } from "react";
import { 
    StyleFormArea,
    StyledBubble, 
    StyledBubbleRight, 
    StyledButtonSend, 
    StyledChatInput, 
    StyledChatPanel, 
    StyledHeaderChat, 
    StyledInfo, 
    StyledMainChat, 
    StyledMessImg, 
    StyledMessImgRight, 
    StyledMessLeft, 
    StyledMessRight, 
    StyledTime 
} from "./ChatPannel.styles";
import { ChatContext } from "../../context/ChatContext";
import { AuthContextUser } from "../../context/AuthContext";
import UserChat from "./UserChat";
import { useFetchRecipientUser, useFetchRecipientUserMessage } from "../../hooks/useFetchRecipientUser";

export function ChatPannel(){
    const {currentChat, message} = useContext(ChatContext);
    const {user} = useContext(AuthContextUser);

    const {recipientUserMessage} = useFetchRecipientUserMessage(currentChat, user);

    console.log(message);
    
    if(!recipientUserMessage){
        return <p>No conversation yet</p>
    }
    return (
        <StyledChatPanel>
            <StyledHeaderChat>
                <span>{recipientUserMessage?.data?.name}</span>
            </StyledHeaderChat>
            <StyledMainChat>
                {message && message?.data?.map((item) =>
                    {item?.senderId !== user?.data?._id ? (
                        <StyledMessLeft>
                            <StyledMessImg></StyledMessImg>
                            <StyledBubble>
                                <StyledInfo>
                                    <StyledTime>
                                        12:46
                                    </StyledTime>
                                </StyledInfo>
                                <div>{item?.text}</div>
                            </StyledBubble>
                        </StyledMessLeft>
                        ) : (
                        <StyledMessRight>
                            <StyledMessImgRight></StyledMessImgRight>
                            <StyledBubbleRight>
                                    <StyledInfo>
                                        <StyledTime>
                                            12:46
                                        </StyledTime>
                                    </StyledInfo>
                                <div>{item?.text}</div>
                            </StyledBubbleRight>
                        </StyledMessRight>
                        )}
                )}
                {/* <StyledMessRight>
                <StyledMessImgRight></StyledMessImgRight>
                    <StyledBubbleRight>
                            <StyledInfo>
                                <StyleInfoName>
                                    HEHE
                                </StyleInfoName>
                                <StyledTime>
                                    12:46
                                </StyledTime>
                            </StyledInfo>
                        <div>Hi, welcome to SimpleChat! Go ahead and send me a message. 😄</div>
                    </StyledBubbleRight>
                </StyledMessRight> */}
            </StyledMainChat>
            <StyleFormArea>
                <StyledChatInput type="text"></StyledChatInput>
                <StyledButtonSend>send</StyledButtonSend>
            </StyleFormArea>
        </StyledChatPanel>
    );
}