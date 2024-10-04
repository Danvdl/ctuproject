import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

import Home from './pages/Home'; // Import your Home component
import About from './pages/About'; // Import your About component
import Contact from './pages/Contact'; // Import your Contact component
import './App.css'; // Import your custom CSS
import Discussion from './pages/Discussion'; // Import your Discussion component
import Timetable from './pages/Timetable'; // Import your Timetable component
import Resource from './pages/Resource'; // Import your Resource component
function App() {
  return (
    <Router>
      <Routes> {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Use element instead of component */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Corrected import path */}
        <Route path="*" element={<h1>Page Not Found</h1>} /> {/* Added a 404 page */}
        <Route path="/home" element={<Home />} /> {/* Added a redirect */}
        <Route path="/discussion" element={<Discussion/>} /> {/* Added a placeholder */}
        <Route path="/timetable" element={<Timetable/>} /> {/* Added a placeholder */}
        <Route path="/resources" element={<Resource/>} /> {/* Added a placeholder */}
      </Routes>
    </Router>
  );
}

export default App;

