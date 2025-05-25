import { useTypewriter } from 'react-simple-typewriter'

import {
  Typography,
  Box,
} from '@mui/material';

import CustomBtn from './CustomBtn';
import { useState } from 'react';

function Introduction() {
  const [done, setDone] = useState(false);

  const [text] = useTypewriter({
    words: ['Delivering scalable, clean, high-performance apps — driven by teamwork and user-first solutions.'],
    typeSpeed: 50,
    onLoopDone: () => setDone(true),
  });

  return (
    <Box id="intro" sx={{ mb: 6, mt: 10, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Jerec Frank.
      </Typography>
      <Typography sx={{ fontSize: '4rem', fontWeight: 700, mb: 2 }}>
        {text}
      </Typography>
      {done && <CustomBtn text="Let's chat" url="https://www.linkedin.com/in/jerecfrank/" />}
    </Box>
  );
}

export default Introduction;
