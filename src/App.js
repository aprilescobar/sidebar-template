import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Reports from './Pages/Reports'
import Team from './Pages/Team'
import Messages from './Pages/Messages'
import Support from './Pages/Support'

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/products' component={Products}/>
        <Route path='/team' component={Team}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/support' component={Support}/>
      </Switch>
    </Router>
  )
}

export default App
