import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import {LoginContext} from "./LoginProvider"


export const RequireAuth = ({children}) => {
    const {isLoggedIn} = useContext(LoginContext)
    const location = useLocation()
    if(!isLoggedIn) {
        return(
            <Navigate to='/login' state={{to: location}}/>
        )
    }
    return children
}