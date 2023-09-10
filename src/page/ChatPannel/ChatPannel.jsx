import { 
    StyleFormArea,
    StyleInfoName, 
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



export function ChatPannel(){
    return (
        <StyledChatPanel>
            <StyledHeaderChat>
                <span>User1</span>
            </StyledHeaderChat>
            <StyledMainChat>
                <StyledMessLeft>
                    <StyledMessImg></StyledMessImg>
                    <StyledBubble>
                        <StyledInfo>
                            <StyleInfoName>
                                Sajad
                            </StyleInfoName>
                            <StyledTime>
                                12:46
                            </StyledTime>
                        </StyledInfo>
                        <div>Hi, welcome to SimpleChat! Go ahead and send me a message. 😄</div>
                    </StyledBubble>
                </StyledMessLeft>
                <StyledMessRight>
                <StyledMessImgRight></StyledMessImgRight>
                    <StyledBubbleRight>
                            <StyledInfo>
                                <StyleInfoName>
                                    Sajad
                                </StyleInfoName>
                                <StyledTime>
                                    12:46
                                </StyledTime>
                            </StyledInfo>
                        <div>Hi, welcome to SimpleChat! Go ahead and send me a message. 😄</div>
                    </StyledBubbleRight>
                </StyledMessRight>
            </StyledMainChat>
            <StyleFormArea>
                <StyledChatInput type="text"></StyledChatInput>
                <StyledButtonSend>send</StyledButtonSend>
            </StyleFormArea>
        </StyledChatPanel>
    );
}