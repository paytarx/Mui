import React from 'react';
import {Container,List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography,Box,Paper} from '@mui/material';

const posts = [
  {
    id: 1,
    username: 'johndoe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Had a great day exploring the city!',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    username: 'janedoe',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Loving the new React updates!',
    timestamp: '1 day ago',
  },
  {
    id: 3,
    username: 'alexsmith',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Just finished a marathon!',
    timestamp: '3 days ago',
  },
  {
    id: 4,
    username: 'emilyjohnson',
    avatar: 'https://i.pravatar.cc/150?img=4',
    content: 'Excited for the upcoming meetup!',
    timestamp: '5 days ago',
  },
];

const Social: React.FC = () => {
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
          Social Feed
        </Typography>
        <List sx={{ width: '100%' }}>
          {posts.map((post) => (
            <ListItem key={post.id} component={Paper} sx={{ my: 2, p: 2 }} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={post.username} src={post.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography component="span" variant="h6" color="text.primary">
                    {post.username}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {post.content}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                      display="block"
                    >
                      {post.timestamp}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
    </div>
  );
};

export default Social;
