import {
  Typography,
  Box,
} from '@mui/material';

function Introduction() {
  return (
    <Box id="intro" sx={{ mb: 6, mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Hi, I'm Jerec Frank.
      </Typography>
      <Typography sx={{ fontSize: '2.8rem', fontWeight: 700 }}>
        Delivering scalable, clean, high-performance apps — driven by teamwork and user-first solutions.
      </Typography>
    </Box>
  );
}

export default Introduction;
