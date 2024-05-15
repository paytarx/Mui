import React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  Box
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const updates = [
  {
    id: 1,
    title: 'Version 2.0 Released',
    description: 'We are excited to announce the release of version 2.0 with new features and improvements.',
    type: 'update',
  },
  {
    id: 2,
    title: 'New Blog Post: React Hook Form',
    description: 'Check out our latest blog post on how to use React Hook Form with Material-UI.',
    type: 'news',
  },
  {
    id: 3,
    title: 'Version 1.1 Bug Fixes',
    description: 'We have fixed several bugs in version 1.1. Please update to the latest version.',
    type: 'update',
  },
  {
    id: 4,
    title: 'Community Meetup',
    description: 'Join us for a community meetup to discuss the latest in web development.',
    type: 'news',
  },
];

const UpdatesPage: React.FC = () => {
  return (
    <div className='w-full'>
      <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Updates
        </Typography>
        <List sx={{ width: '100%' }}>
          {updates.map((update) => (
            <React.Fragment key={update.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    {update.type === 'update' ? <UpdateIcon /> : <NewReleasesIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={update.title}
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {update.description}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
    </div>
  );
};

export default UpdatesPage;
