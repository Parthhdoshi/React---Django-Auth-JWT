import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Header() {
  let {user} = useContext(AuthContext)
  let {logoutuser} = useContext(AuthContext)
  // console.log(user.username);
  return (
    <React.Fragment>
        <Link to='/'>Home</Link>
        <span> | </span>
        {user?
        <p onClick={logoutuser}>Logout</p>:
        <Link to='/login'>login</Link>
        }
        <p>hello {user ? (user.username) : ''}  - Its Privide from ContextApi </p>
    </React.Fragment>
  )
}

export default Header