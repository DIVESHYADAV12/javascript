import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Product from './Pages/Products/Product'
import Men from './pages/Products/Men'
import Women from './pages/Products/Women'

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Product/men' element={<Men />} />
        <Route path='/Product/women' element={<Women />} />

      </Routes>
    </div>
  )
}

export default App
