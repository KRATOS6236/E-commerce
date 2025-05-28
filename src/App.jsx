import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/Home';
import New from './pages/newArrivals/New';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Layout/>}>
        <Route path='' element = {<Home/>}></Route>
        <Route path='/newArrival' element = {<New/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
      </Route>
    )
  )
  return(
    <RouterProvider router={route}/>
  )
}

export default App
