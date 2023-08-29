//Importar React
import React from 'react'
import ReactDOM from 'react-dom/client'
//Importar React/React-Dom/React-Router
import { Route, Routes, BrowserRouter } from 'react-router-dom'
//Importar Componentes
import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'
//Importar CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <Routes>
      {/* <Route path='/' element={ <Home /> } /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
