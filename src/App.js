import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import AuthContextProvider from './Auth'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'

const App = () => (
  <AuthContextProvider>
    <Router>
      <div className='App'>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    </Router>
  </AuthContextProvider>
)

export default App
