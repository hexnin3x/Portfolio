
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import CTF from './pages/CTF';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import TerminalMode from './pages/TerminalMode';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ctf" element={<CTF />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terminal" element={<TerminalMode />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
