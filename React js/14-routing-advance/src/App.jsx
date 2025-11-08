import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Product from './Pages/Products/Product'
import Men from './pages/Products/Men'
import Women from './pages/Products/Women'
import ContactDetail from './Pages/Contact/ContactDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/:contactId' element={<ContactDetail />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/Product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>


      </Routes>
    </div>
  )
}

export default App
