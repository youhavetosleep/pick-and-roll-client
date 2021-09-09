import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import {Redirect} from "react-router-dom"

const Admin = () => {
    const {isLoggedIn} = useContext(AuthContext)

    if(!isLoggedIn){
        return <Redirect to="/"></Redirect>
    }
    return (
        <div>
            <h1>admin</h1>
        </div>
    )
}

export default Admin
