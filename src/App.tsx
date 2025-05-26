
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Container } from '@mui/material';

import Main from './pages/Main';
import { MenuBar } from './components/MenuBar';
import { initGA } from './analytics';

function App() {
  useEffect(() => initGA(), []);

  return (
    <Router>
      <MenuBar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
