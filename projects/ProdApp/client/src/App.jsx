import { Route, Routes } from 'react-router-dom'
import './App.css'
// import logo from './logo.png'
import Register from './Register'
import Login from './Login'
import Home from './Home'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/register' Component={Register}/>
    <Route path='/login' Component={Login}/>
    <Route index Component={Home}/>
   
    </Routes>
  )
}

export default App
