import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvidr';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

if(loading) {
  return <p>Loading................</p>
}

    if(user){
        return children;
    }
    else{
        return <Navigate state={{from: location}} to='/login' replace></Navigate>
    }

  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute