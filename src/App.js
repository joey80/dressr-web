import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import AuthContextProvider from './Auth'
import Home from './Home'
import Login from './Login'
import SignUp from './Signup'
import './App.css'

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
