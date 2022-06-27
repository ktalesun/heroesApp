import { useContext, useEffect } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";


export const PrivateRoutes = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    console.log('re-render!')
  

    // const lastPath = pathname + search;
    const lastPath = useMemo(() => pathname + search , [pathname, search])
    console.log(lastPath);
    localStorage.setItem('lastPath', lastPath)
    
    return (logged) ? children : <Navigate to ="login" />
    

}
