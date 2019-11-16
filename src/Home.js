import React, { Fragment, useContext } from 'react'
import { AuthContext } from './Auth'
import firebaseConfig from './firebaseConfig'

const Home = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)

  return (
    <Fragment>
      <h1>Welcome {currentUser.displayName}</h1>
      <img src={currentUser.photoURL} alt={currentUser.displayName} />
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </Fragment>
  )
}

export default Home
