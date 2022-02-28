import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext)
  return (
    <div> 
      {!user? <form onSubmit={loginUser}>
            <h1>Login Page</h1>
            <input type="text" name="username" placeholder='Enter Username' />
            <input type="password" name="password" placeholder='Enter password' />
            <input type="submit" value="Submit" />
        </form> : <></> }
        
    </div>
  )
}

export default LoginPage