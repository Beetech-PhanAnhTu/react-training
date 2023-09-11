import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ChatPannel } from "./page/ChatPannel/ChatPannel";
import { AuthContextUser } from "./context/AuthContext";
import { ChatContext } from "./context/ChatContext";
import UserChat from "./page/ChatPannel/UserChat";

const StyledContainer = styled.div`
	border-right: 1px solid whitesmoke;
  display: flex;
  height: 800px;
	/* Hide scrollbar for Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`

const StyledSideBar = styled.div`
  width: 30%;
  border: var(--border);
  border-radius: 5px;
  background: var(--msger-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
`;

const StyledMainChat = styled.div`
  width: 100%;

`;

const StyleListUser = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;


function Content() {
  const {userChat, updateCurrentChat} = useContext(ChatContext);
  const {user} = useContext(AuthContextUser);
    return (
        <StyledContainer>
          {/* sidebar */}
          <StyledSideBar>
            {userChat?.length < 1 ? null : (
                <StyleListUser>
                    {userChat?.data?.map((chat, index) => (
                        <div key={index} onClick={() => updateCurrentChat(chat)}>
                            <UserChat chat={chat} user={user}/>
                        </div>                   
                    ))}
                </StyleListUser>
          )}
          </StyledSideBar>
          {/* sidebar */}
          {/* mainchat */}
          <StyledMainChat>
            <ChatPannel />
          </StyledMainChat>
          {/* mainchat */}
        </StyledContainer>
    )
}

export default Content;