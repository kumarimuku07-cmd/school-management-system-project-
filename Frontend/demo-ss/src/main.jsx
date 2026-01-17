import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/"element={<registration/>}></Route>
        <Route path="/courses"element={<courses/>}></Route>
        <Route path="/enquiries"element={<enquiries/>}></Route>
        <Route path="/announcement"element={<announcement/>}></Route>
    </Routes>
    </BrowserRouter>
    
    <App />
  </StrictMode>,
)
