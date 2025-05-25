import { Box, Typography, IconButton, Stack, Divider } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 10, py: 4, bgcolor: 'background.paper' }}>
      <Divider sx={{ mb: 3 }} />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ px: { xs: 2, sm: 6 } }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Personal Website
        </Typography>

        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="mailto:jericfrank@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Mail />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/jericfrank/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/jerecfrank/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
