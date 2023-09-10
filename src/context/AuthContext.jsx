import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContextUser = createContext();

export const AuthContextUserProvider = ({children}) => {
    const [user, setUser] = useState()
    //login state
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const HandleLoginUser = useCallback(
        async (e) => {
            e.preventDefault();
            axios.post('http://localhost:5000/api/users/login', JSON.stringify(userLogin), {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
                timeout: 10000
            })
            .then(response => {
                // Handle successful response
                localStorage.setItem('userAuth', JSON.stringify(userLogin))
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

    useEffect(() => {
        console.log("re-render");
        localStorage.getItem('userAuth', JSON.stringify(user))
    }, [user]);

    return <AuthContextUser.Provider value={{ 
        user,
        userLogin,
        setUserLogin,
        HandleLoginUser
    }}>
        { children }
    </AuthContextUser.Provider>
}