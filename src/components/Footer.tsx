import { useCallback } from 'react';
import ga from 'react-ga4';

import { Box, Typography, IconButton, Stack, Divider } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';

export default function Footer() {
  const handleClickMail = useCallback(() => {
    ga.event({
      category: 'CTA',
      action: 'Click',
      label: 'Footer - gmail',
    });
  }, []);

  const handleClickGithub = useCallback(() => {
    ga.event({
      category: 'CTA',
      action: 'Click',
      label: 'Footer - github',
    });
  }, []);

  const handleClickLinkedIn = useCallback(() => {
    ga.event({
      category: 'CTA',
      action: 'Click',
      label: 'Footer - linkedIn',
    });
  }, []);

  return (
    <Box component="footer" sx={{ mt: 10, bgcolor: 'background.paper' }}>
      <Divider sx={{ mb: 3 }} />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
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
            onClick={handleClickMail}
          >
            <Mail />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/jericfrank/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            onClick={handleClickGithub}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/jerecfrank/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            onClick={handleClickLinkedIn}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
