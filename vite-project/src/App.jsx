import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

import Home from './pages/Home'; // Import your Home component
import About from './pages/About'; // Import your About component
import Contact from './pages/Contact'; // Import your Contact component

function App() {
  return (
    <Router>
      <Routes> {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Use element instead of component */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Corrected import path */}
      </Routes>
    </Router>
  );
}

export default App;

