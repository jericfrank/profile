import {
  Typography,
  Box,
} from '@mui/material';

interface Props {
  summaryText: string;
}

function Introduction({ summaryText }: Props) {
  return (
    <Box id="intro" sx={{ mb: 6, mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Jerec Frank.
      </Typography>
      <Typography sx={{ fontSize: '4rem', fontWeight: 700 }}>
        {summaryText}
      </Typography>
    </Box>
  );
}

export default Introduction;
