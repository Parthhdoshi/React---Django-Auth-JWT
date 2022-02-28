import {createContext, useState} from "react";
import axios from 'axios'
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext() 
export default AuthContext

export const AuthProvider = ({children}) => {
    localStorage.getItem('authTokens')?console.log("token Avaliable"):console.log("Token unavaliable")
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode((localStorage.getItem('authTokens'))):null)
    console.log("user -",user)
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
    console.log("Auth Token-",authTokens)
    const history = useNavigate();

    let loginUser = async(e) => {
        e.preventDefault()
        let response = await axios.post('http://127.0.0.1:8000/api/token/',{'username':e.target.username.value, 'password':e.target.password.value})
        console.log(jwtDecode(response.data.access));
        if(response.status === 200){
            setAuthTokens(response.data)
            setUser(jwtDecode(response.data.access))
            localStorage.setItem('authTokens',JSON.stringify(response.data))
            history.push('/')
            // alert(response.data.username)
        } else {
            alert("Something Went Wrong!")
        }
    }

    let logoutuser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history.push('/login')


    }

    let contextData = {
        user,
        loginUser,
        logoutuser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}