import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="footer">
        <p>© 2025 Fellah Faizel. Made with ❤️ and React.</p>
      </footer>
    </div>
  );
}

export default App;