import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
)