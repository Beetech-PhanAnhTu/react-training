import { useContext, useEffect, useState } from "react";
import { chatContext, sendMessage, setMessage, useChat } from "./context";
import Avatar from '@mui/material/Avatar'
import { styled } from "styled-components";
import { ChatPannel } from "./page/ChatPannel/ChatPannel";

// const StyledContainer = styled.div`
//   background-color: #a7bcff;
//   height: 776px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// //sidebar
// const StyledSideBar = styled.div`
//   width: 50%;
// `;

const StyledContainer = styled.div`
	height: 100vh;
	min-width: 300px;
	max-width: 350px;
	overflow-y: scroll;
	border-right: 1px solid whitesmoke;

	/* Hide scrollbar for Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	height: 80px;
	border-bottom: 1px solid whitesmoke;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
`

const StyledSearch = styled.div`
	display: flex;
	align-items: center;
	padding: 15px;
	border-radius: 2px;
`

const StyledUserAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`

const StyledSearchInput = styled.input`
	outline: none;
	border: none;
	flex: 1;
`

const StyledSidebarButton = styled(Button)`
	width: 100%;
	border-top: 1px solid whitesmoke;
	border-bottom: 1px solid whitesmoke;
`

function Content() {
    const [state, dispatch] = useChat();
    const {message, messages, name} = state;
    return (
        <StyledContainer>
          <StyledContainer>
            <StyledHeader>
              <div>
                <IconButton>
                  <ChatIcon />
                </IconButton>
                <IconButton>
                  <MoreVerticalIcon />
                </IconButton>
                <IconButton>
                  <LogoutIcon />
                </IconButton>
              </div>
            </StyledHeader>

            <StyledSearch>
              <SearchIcon />
              <StyledSearchInput placeholder='Search in conversations' />
            </StyledSearch>

            <StyledSidebarButton
            >
              Start a new conversation
            </StyledSidebarButton>

            <Dialog
            >
              <DialogTitle>New Conversation</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter a Google email address for the user you wish to chat
                  with
                </DialogContentText>
                <TextField
                  autoFocus
                  label='Email Address'
                  type='email'
                  fullWidth
                  variant='standard'
                />
              </DialogContent>
              <DialogActions>
                <Button>Cancel</Button>
                <Button>
                  Create
                </Button>
              </DialogActions>
            </Dialog>
          </StyledContainer>
          <ChatPannel />
          {/* <ul>
              <div>
                {messages.map((message, index) => (
                    <li key={index}>{message} </li>
                ))}
              </div>
          </ul> */}
          {/* <input 
              placeholder="Enter"
              value={message}
              onChange={(e) => {
                dispatch(setMessage(e.target.value));
              }}
            />
          <button onClick={() => {dispatch(sendMessage(message))}}>Send</button> */}
        </StyledContainer>
    )
}

export default Content;