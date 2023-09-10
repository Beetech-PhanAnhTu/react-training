import { useContext } from "react";
import styled from "styled-components";
import { AuthContextUser } from "../../context/AuthContext";

const StyledContainer = styled.form`

`;
const Login = () => {
    const {user, userLogin, setUserLogin, HandleLoginUser} = useContext(AuthContextUser);
    return (
        <StyledContainer onSubmit={HandleLoginUser}>
            <input type="text" onChange={(e) => {setUserLogin({...userLogin, email: e.target.value})}} />
            <input type="password" name="" id="" onChange={(e) => {setUserLogin({...userLogin, password: e.target.value})}} />
            <button type="submit">Login</button>
        </StyledContainer>
    )
}

export default Login;