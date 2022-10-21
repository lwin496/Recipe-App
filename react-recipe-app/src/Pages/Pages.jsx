import Home from './Home'
import Cuisine from './Cuisine'
import {Route, Routes, useLocation } from 'react-router-dom'
import Search from '../Components/Search'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'



const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </AnimatePresence>
    
   
  )
}

export default Pages
