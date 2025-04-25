import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AuthUser from './Pages/AuthUser'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<AuthUser/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='*' element={<AuthUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
