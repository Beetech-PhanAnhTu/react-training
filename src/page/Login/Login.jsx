import { useContext } from "react";
import styled from "styled-components";
import { AuthContextUser } from "../../context/AuthContext";


const StyledFormLogin = styled.form`
    margin: 20px auto;
    padding: 40px 50px;
    max-width: 300px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px #666;
`;

const StyledInput = styled.input`
    border: 1px solid #c0c0c0;
    transition: .2s;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 14px 12px;
    font-size: 16px;
    border-radius: 2px;
    font-family: Raleway, sans-serif;
`;

const StyledBtnSubmit = styled.button`
    border: none;
    background: #EF5350;
    color: white;
    font-weight: bold;
    transition: 0.2s;
    margin: 20px 0px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 14px 12px;
    font-size: 16px;
    border-radius: 2px;
    font-family: Raleway, sans-serif;
    cursor: pointer;
`;

const Login = () => {
    const {userLogin, setUserLogin, HandleLoginUser} = useContext(AuthContextUser);
    return (
        <StyledFormLogin onSubmit={HandleLoginUser}>
            <StyledInput placeholder="Email" type="text" onChange={(e) => {setUserLogin({...userLogin, email: e.target.value})}} />
            <StyledInput placeholder="Password" type="password" id="" onChange={(e) => {setUserLogin({...userLogin, password: e.target.value})}} />
            <StyledBtnSubmit type="submit">Login</StyledBtnSubmit>
        </StyledFormLogin>
    )
}

export default Login;