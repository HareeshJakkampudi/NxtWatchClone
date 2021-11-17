import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Login from '../components/Login'
import Home from '../components/Home'
import Trending from '../components/Trending'
import NotFound from '../components/NotFound.js'

export const routes = (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={Trending} />
    <Route component={NotFound} />
  </Switch>
)
