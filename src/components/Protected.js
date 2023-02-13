/* This is to protect the components to needs to be authenticated before loading
in our app, we can display users before signin so this is not required for now
Just wrap the component in App.js with <Protected></Protected> if that functionality is needed.
*/

import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../utils/context/AuthContext'

const Protected = ({children}) => {
  const {user} = UserAuth();

  if(!user) {
    return <Navigate to="/" />
  }

  return children;
}

export default Protected