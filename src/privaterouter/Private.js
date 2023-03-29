import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../context/Contexts';

const Private = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    
    if(loading){
        return <div>it is loading ............man</div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default Private;