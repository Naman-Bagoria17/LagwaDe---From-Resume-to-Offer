import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import Loader from "../components/Loader";

import React from 'react'

const Protected = ({children}) => {
    const { loading,user } = useAuth()

    if(loading){
        return <Loader />;
    }

    if(!user){
        return <Navigate to={'/login'} />
    }
    
    //if a user is logged in, then return the page that this protected component wraps.
    return children
}

export default Protected