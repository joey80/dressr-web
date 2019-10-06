import React, { Fragment, useContext } from 'react'
import { AuthContext } from './Auth'
import firebaseConfig from './firebaseConfig'

const Home = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Fragment>
      <h1>Welcome {currentUser.displayName}</h1>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </Fragment>
  )
}

export default Home
