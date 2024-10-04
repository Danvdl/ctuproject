
import Navigation from '../components/Navbar';
import Footer from '../components/Footer'; 
import './Home.css';  // Custom CSS for the homepage

const Home = () => {
  return (
    <div className="home-page-container">
      <Navigation /> {/* Include the Navigation */}
      <div className="indent-wrapper-homepage">
        <div className="text-center">
          <h1>CTU-Buddy</h1>
          <h2>Learning at CTU college is <span style={{ color: '#00C6FF' }}>Fun</span></h2>
        </div>
      </div>
      <Footer /> {/* Add the Footer */}
    </div>
  );
};

export default Home;
