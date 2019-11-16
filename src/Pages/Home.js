import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../Auth'
import firebaseConfig from '../firebaseConfig'
import Navbar from '../Organisms/Navbar/Navbar'
import ViewContainer from '../Organisms/ViewContainer/ViewContainer'
import TabBar from '../Organisms/TabBar/TabBar'

const Home = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Fragment>
      <Navbar />
      <ViewContainer>
        <h1>Welcome {currentUser.displayName}</h1>
        <img src={currentUser.photoURL} alt={currentUser.displayName} />
        <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
      </ViewContainer>
      <TabBar />
    </Fragment>
  )
}

export default Home
