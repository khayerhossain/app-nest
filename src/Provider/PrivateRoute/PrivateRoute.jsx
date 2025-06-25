import React, { use } from 'react';
import { AuthContext } from '../AuthContext';
import { Navigate} from 'react-router';
import Loading from '../../Pages/Loading/Loading';
const PrivateRoute = ({children}) => {
    const {loading,user}=use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;