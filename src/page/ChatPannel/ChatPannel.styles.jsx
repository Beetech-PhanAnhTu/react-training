import { styled } from "styled-components";

//chat panel
export const StyledChatPanel = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 100%;
  border: var(--border);
  border-radius: 5px;
  background: var(--msger-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
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
  background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg);
`;

export const StyledChatInput = styled.input`
  flex: 1;
  background: #ddd;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
`;

export const StyledButtonSend = styled.button`
    margin-left: 10px;
    background: rgb(0, 196, 65);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.23s;
`;

export const StyledBubble = styled.div`
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

export const StyledTime = styled.div`
  font-size: 0.85em;
`;

export const StyledMessRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  position: relative;
`;

export const StyledMessImgRight = styled.div`
    background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg);
    width: 50px;
    height: 50px;
    margin-right: 10px;
    background: #ddd;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    transform: translateX(9px) translateY(32px);
`;

export const StyledBubbleRight = styled.div`
  padding: 15px;
  border-radius: 15px;
  background: var(--right-msg-bg);
`;

export const StyleFormArea = styled.div`
  display: flex;
  padding: 10px;
  border-top: var(--border);
  background: #eee;
`;

export const StyledHeaderChat = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: var(--border);
    background: #eee;
    color: #666;
`;