//React
import React from 'react'
//Globalstyle
import Globalstyle from '../src/components/Globalstyled'
//react-router-dom
import { Route, Switch, useLocation } from 'react-router-dom'

//icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

//pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Admin from './pages/Admin'
import Contactme from './pages/Contactme'
import Nav from './components/Nav'

import { Signupform, Loginform } from './components/Auth/Authenticacao'

function App() {
  const location = useLocation()
  library.add(fab, faDatabase)
  return (
    <div>
      <Globalstyle />
      {location.pathname !== '/admin' && <Nav />}
      <Switch>
        <Route exact path={['/']} component={Home} />
        <Route path={['/portfolio/:id', '/portfolio']} component={Portfolio} />
        <Route path={['/contacme']} component={Contactme} />
        <Route path={['/Admin']} component={Admin} />
        <Route path='/Signup' component={Signupform} />
        <Route path='/Login' component={Loginform} />
      </Switch>
    </div>
  )
}
export default App;