import { Box, Typography, Divider, Grid } from '@mui/material';
import { TECH_STACKS } from './constants';

function TechStack() {
  return (
    <Box id="tech-stack" sx={{ mb: 6, mt: 10, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        Tech Stack
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container direction="column" spacing={4}>
        {Object.entries(TECH_STACKS).map(([category, items]) => (
          <Grid sx={{ xs: 12, sm: 6, md: 4 }} key={category}>
            <Typography variant="h5" gutterBottom>
              {category}
            </Typography>
            <Grid container spacing={1}>
              {items.map((tech) => (
                <Grid key={tech.name} sx={{ m: 3 }}>
                  <Box
                    component="img"
                    src={tech.iconUrl}
                    alt={tech.name}
                    sx={{ width: 40, height: 40}}
                  />
                  <Typography variant="caption" display="block" align="center">
                    {tech.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TechStack;
