import { styled } from "styled-components";

//chat panel
export const StyledChatPanel = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 867px;
  margin: 25px 10px;
  height: calc(100% - 50px);
  border: var(--border);
  border-radius: 5px;
  background: var(--msger-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
`;

export const StyledMainChat = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const StyledMessLeft = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const StyledMessImg = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

export const StyledChatInput = styled.input`
  margin: 0;
  width: 50%;
  display: block;
  padding: 5px;
  border-radius: 5px;
`;

export const StyledButtonSend = styled.button`
  background: rgb(0, 196, 65);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.23s;
  padding: 5px;
  width: 100px;
`;

export const StyledBubble = styled.div`
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: var(--left-msg-bg);
`;

export const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyleInfoName = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

export const StyledTime = styled.div`
  font-size: 0.85em;
`;