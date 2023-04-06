import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import RestaurantItem from './components/RestaurantItem'

import Cart from './components/Cart'

import ProtectedRoute from './components/ProtectedRoute'

// import NotFound from '.components/NotFound'

import './App.css'

// const sortByOptions = [
//   {
//     id: 0,
//     displayText: 'Highest',
//     value: 'Highest',
//   },
//   {
//     id: 2,
//     displayText: 'Lowest',
//     value: 'Lowest',
//   },
// ]

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <ProtectedRoute exact path="/restaurant/:id" component={RestaurantItem} />
    {/* <Route component={NotFound} /> */}
  </Switch>
)

export default App
