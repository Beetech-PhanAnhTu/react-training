import { 
    StyleInfoName, 
    StyledBubble, 
    StyledButtonSend, 
    StyledChatInput, 
    StyledChatPanel, 
    StyledInfo, 
    StyledMainChat, 
    StyledMessImg, 
    StyledMessLeft, 
    StyledTime 
} from "./ChatPannel.styles";



export function ChatPannel(){
    return (
        <StyledChatPanel>
            <StyledMainChat>
                <StyledMessLeft>
                    <StyledMessImg>
                        <StyledBubble>
                            <StyledInfo>
                                <StyleInfoName>
                                    Sajad
                                </StyleInfoName>
                                <StyledTime>
                                    12:46
                                </StyledTime>
                            </StyledInfo>
                        </StyledBubble>
                    </StyledMessImg>
                </StyledMessLeft>
                {/* <StyledMessRight>
                    
                </StyledMessRight> */}
            </StyledMainChat>
            <StyledChatInput type="text"></StyledChatInput>
            <StyledButtonSend>send</StyledButtonSend>
        </StyledChatPanel>
    );
}