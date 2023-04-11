import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopAll from "./Pages/ShopAll/ShopAll"
import Home from "./Pages/Home/Home"
import Contact from './Pages/Contact/Contact'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/shopall" element={<ShopAll />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </Router>
  )
}
export default App
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
