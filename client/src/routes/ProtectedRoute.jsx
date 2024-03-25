import * as React from "react"
import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/userContext";


export default function ProtectedRoute({children, redirectTo = '/'}) {

  const { userLogged } = React.useContext(UserContext)  

  if(!userLogged){
    return <Navigate to={redirectTo}/>
  }
  
  return children
  
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    redirectTo: PropTypes.node,
};