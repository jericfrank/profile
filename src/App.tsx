import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter'

import { Container } from '@mui/material';

import { MenuBar } from './components/MenuBar';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import Career from './components/Career';

function App() {
  const [text] = useTypewriter({
    words: ['Delivering scalable, clean, high-performance apps — driven by teamwork and user-first solutions.'],
    typeSpeed: 50,
  });

  return (
    <Router>
      <MenuBar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Introduction summaryText={text} />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
