import { useContext, useEffect, useState } from "react";
import { chatContext, sendMessage, setMessage, useChat } from "./context";
import Avatar from '@mui/material/Avatar'
import { styled } from "styled-components";
import { ChatPannel } from "./page/ChatPannel/ChatPannel";

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

const StyledItemUser = styled.li`
    display: flex;
    height: 80px;
    position: relative;
    border-radius: 2px;
    padding: 10px;
    margin: 15px 0;
    background-color: #f0f0f0;
    box-shadow: 0 1px 3px 0 #707070, 0 1px 1px 0 #adadad;
    transition: box-shadow 0.15s ease-in-out;
    margin-left: 15px;
    margin-right: 15px;
`;

const StyledAvatarUser = styled.a`
    display: block;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
    background-size: cover;
    border-radius: 30px;
    border: 1px solid #eaeaea;
    top: 10px;
    left: 10px;
    cursor: pointer;
    background-image: url(https://graph.facebook.com/100006582316470/picture?width=130&height=130);
`;

const StyledUserChat = styled.div`
    flex: 1;
    height: 60px;
    overflow: hidden;
    position: relative;
    margin: 0 5px;
    cursor: pointer;
`;

const StyledStatus = styled.div`
    position: absolute;
    top: 10px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #37d316;
`;

const StyledUserName = styled.div`
    position: absolute;
    top: 5px;
    left: 17px;
    color: #000;
    font-size: 1.5em;
`;

function Content() {
    return (
        <StyledContainer>
          <StyledSideBar>
            <StyleListUser>
              <StyledItemUser>
                <StyledAvatarUser></StyledAvatarUser>
                <StyledUserChat>
                  <StyledStatus></StyledStatus>
                  <StyledUserName>HEHEHE</StyledUserName>
                </StyledUserChat>
              </StyledItemUser>
            </StyleListUser>
            
          </StyledSideBar>

          <StyledMainChat>
            <ChatPannel />
          </StyledMainChat>

        </StyledContainer>
    )
}

export default Content;