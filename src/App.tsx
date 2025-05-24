import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MenuBar } from './components/MenuBar';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <MenuBar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Introduction/>} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
