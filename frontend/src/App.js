//React
import React from 'react'
//Globalstyle
import Globalstyle from '../src/components/Globalstyled'
//react-router-dom
import { Route, Switch } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contactme from './pages/Contactme'
import Nav from './components/Nav'


function App() {
  return (
    <div>
      <Globalstyle />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contacme'>
          <Contactme />
        </Route>
      </Switch>
    </div>
  )
}
export default App;