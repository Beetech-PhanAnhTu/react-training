import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContextUser = createContext();

export const AuthContextUserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    //login state
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const user = localStorage.getItem('userAuth');
        setUser(JSON.parse(user))
    }, []);

    //handle login user
    const HandleLoginUser = useCallback(
        async (e) => {
            e.preventDefault();
            //call api login
            axios.post('http://localhost:5000/api/users/login', JSON.stringify(userLogin), {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
                timeout: 10000
            })
            .then(response => {
                // Handle successful response then store user in localStorage, set state response user
                localStorage.setItem('userAuth', JSON.stringify(response))
                setUser(response);
            })
            .catch(error => {
                // Handle error
                if (error.response) {
                    console.error('Response Error:', error.response.status, error.response.data);
                } else if (error.request) {
                    console.error('Request Error:', error.request);
                } else {
                    console.error('Error:', error.message);
                }
            });
        },[userLogin]
      );

    return <AuthContextUser.Provider value={{ 
        user,
        userLogin,
        setUserLogin,
        HandleLoginUser
    }}>
        { children }
    </AuthContextUser.Provider>
}