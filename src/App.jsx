import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Tienda from './pages/Tienda';

function App() {

  return (
    <>
      <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
