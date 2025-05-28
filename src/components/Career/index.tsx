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
import { WorkExperience } from '../../firebase/fetchInfoByUserId';

interface Props {
  workExperiences: WorkExperience[];
}

function Career({ workExperiences }: Props) {
  return (
    <Box id="career" sx={{ mb: 6, mt: 10, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        My Experience
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <List>
        {workExperiences.map((item, index) => (
          <ListItem key={item.id} alignItems="flex-start" disableGutters sx={{ mb: 2 }}>
            <ListItemAvatar>
              <Link href={item.website} target="_blank" rel="noopener noreferrer">
                <Avatar
                  alt={item.company}
                  src={item.logo_url}
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
                  <Typography component="span" variant="body2" color="text.secondary" sx={{ mb: 1, display: 'flex' }}>
                    {item.duration_text}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ whiteSpace: 'break-spaces' }}
                  >
                    {item.description.join('\n\n')}
                  </Typography>
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
