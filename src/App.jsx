import { useContext, useReducer, useRef } from "react";
import Content from "./Content";
import { Link, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import Login from "./page/Login/Login";

const StyledNavBar = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledItem = styled.li`
  &hover{
    text-decoration: none; /* Loại bỏ gạch chân khi hover */
    color: #ff0000;
  }
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
  transition: all 0.3s ease 0s;
  padding: 0 20px;
  text-decoration: underline;
  color: #007bff;
`;

function App() {
  return (
    <div>
      <StyledHeader className="App">
        <StyledNavBar>
          <StyledItem><StyledLink to="/login">Login</StyledLink></StyledItem>
          <StyledItem><StyledLink to="/chat-room">Chat room</StyledLink></StyledItem>
        </StyledNavBar>
      </StyledHeader>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/chat-room" element={<Content />}/>
      </Routes>
    </div>
  );
}


export default App;
