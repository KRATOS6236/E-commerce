import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import Men from './pages/men/Men';
import Women from './pages/women/Women';
import Socks from './pages/socks/Socks';
import New from './pages/newArrivals/New';
import Sustain from './pages/sustainability/Sustain';
import Rerun from './pages/rerun/Rerun';
import Stores from './pages/stores/Stores';
import Login from './pages/login/Login';
import Help from './pages/help/Help';
import Cart from './pages/cart/Cart';


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Layout/>}>
        <Route path='' element = {<Home/>}></Route>
        <Route path='/men' element = {<Men/>}></Route>
        <Route path='/women' element = {<Women/>}></Route>
        <Route path='/socks' element = {<Socks/>}></Route>
        <Route path='/newArrival' element = {<New/>}></Route>
        <Route path='/sustain' element = {<Sustain/>}></Route>
        <Route path='/rerun' element = {<Rerun/>}></Route>
        <Route path='/stores' element = {<Stores/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/help' element = {<Help/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
      </Route>
    )
  )
  return(
    <RouterProvider router={route}/>
  )
}

export default App
