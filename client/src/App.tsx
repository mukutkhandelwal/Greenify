
import './App.css'
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Signup from "./components/Register/Signup"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cart' element={<Cart/>}> </Route>
      <Route path='/signup' element={<Signup/>}> </Route>
    </Routes>
    </Router>

    </>
  )
}

export default App
