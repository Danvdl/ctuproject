import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Discussion from './pages/Discussion'; 
import Timetable from './pages/Timetable'; 
import Resource from './pages/Resource'; 
import './App.css'; 
import client from './apollo-client'; // Import the Apollo Client
import { ApolloProvider } from '@apollo/client'; // Import ApolloProvider

function App() {
  return (
    <ApolloProvider client={client}> {/* Wrap the entire app with ApolloProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/resources" element={<Resource />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
