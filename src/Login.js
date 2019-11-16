import React, { Fragment, useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import * as firebase from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import { AuthContext } from './Auth'

const Login = ({ history }) => {
  const handleGoogleLogin = useCallback(async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebaseConfig.auth().signInWithRedirect(provider)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }, [history])

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <Fragment>
      <h1>Log in</h1>
      <button onClick={handleGoogleLogin}>Log in with Google</button>
    </Fragment>
  )
}

export default withRouter(Login)
