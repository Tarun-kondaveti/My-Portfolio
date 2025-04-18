import './App.css';
import Navbar from './components/Navbar';
import Hero  from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
