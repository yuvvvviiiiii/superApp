import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Selection from './pages/Selection.jsx'
import CarouselPage from './pages/CarouselPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/selection' element={<Selection/>}/>
        <Route path='/carousel' element={<CarouselPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
