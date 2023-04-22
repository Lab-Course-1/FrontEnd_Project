import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopAll from "./Pages/ShopAll/ShopAll"
import Home from "./Pages/Home/Home"
import Contact from './Pages/Contact/Contact'
import OurStory from './Pages/OurStory/OurStory'
import Oops from './Pages/Components/Oops/Oops'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/shopall" element={<ShopAll />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path='/login' element={<Login/>} exact />
        <Route path='/register' element={<Register/>} exact />
        <Route path="/ourstory" element={<OurStory />} exact />
        <Route path="*" element={<Oops />}/>
      </Routes>
    </Router>
  )
}
export default App
