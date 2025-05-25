import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Link
} from '@mui/material';
import { WORK_EXPERIENCES } from './constants';

function Career() {
  return (
    <Box id="career" sx={{ mb: 6, mt: 10, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        My Experience
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <List>
        {WORK_EXPERIENCES.map((item, index) => (
          <ListItem key={index} alignItems="flex-start" disableGutters sx={{ mb: 2 }}>
            <ListItemAvatar>
              <Link href={item.website} target="_blank" rel="noopener noreferrer">
                <Avatar
                  alt={item.company}
                  src={item.image}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
              </Link>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h5" component="div">
                  {item.title} — <Typography component="span" variant="body1" sx={{ fontWeight: 'bold' }}>{item.company}</Typography>
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2" color="text.secondary">
                    {item.duration}
                  </Typography>
                  {item.descriptions.map(description => (
                    <Typography variant="body1" sx={{ mt: 3 }}>
                      {description}
                    </Typography>
                  ))}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Career;
