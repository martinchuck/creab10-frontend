import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../shared/api"
import { getAuthToken, useLogout } from "../shared/login"

export const Welcome = () => {
    const token = getAuthToken()
    const navigate = useNavigate()
    const logout = useLogout()
    useEffect(()=> {
        if (!token) { 
            navigate('/login')
        }
    }, [token, navigate])
    return (<><h1>Welcome</h1>
    <button onClick={async() => {
        const response = await api.get('/users')
        console.log(response)
    }}>Send request with token</button>
    <br/>
    <button onClick={async() => {
        logout()
    }}>Logout</button>
    </>)
}