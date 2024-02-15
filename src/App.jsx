import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Order from './Pages/Order'
import Menu from './Pages/Menu'
import Difference from './Pages/Difference'
import Contact from './Pages/Contact'
import Auth from './Pages/Auth'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Auth></Auth>}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/difference' element={<Difference></Difference>}></Route>
        <Route path='/home' element={<Home insideHome></Home>}></Route>
        <Route path='/register' element={<Auth insideRegister></Auth>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
