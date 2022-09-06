import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
