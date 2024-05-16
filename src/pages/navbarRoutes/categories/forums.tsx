import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {Container,TextField,Button,Box,Typography,List,ListItem,ListItemText,Paper,} from '@mui/material';
//@ts-ignore
import { Message, FormInputs } from '../../../types/forumTypes';


const ForumPage: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageId, setMessageId] = useState<number>(1);

  const onSubmit: SubmitHandler<FormInputs> = data => {
    const newMessage: Message = { id: messageId, name: data.name, content: data.content };
    setMessages([...messages, newMessage]);
    setMessageId(messageId + 1);
    reset();
  };
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
          Forum
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
            autoFocus
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            //@ts-ignore
            helperText={errors.name ? errors.name.message : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="content"
            label="Message"
            multiline
            rows={4}
            {...register('content', { required: 'Message content is required' })}
            error={!!errors.content}
            //@ts-ignore
            helperText={errors.content ? errors.content.message : ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Post Message
          </Button>
        </Box>
        <List sx={{ width: '100%' }}>
          {messages.map((message) => (
            <ListItem key={message.id} alignItems="flex-start" component={Paper} sx={{ my: 2, p: 2 }}>
              <ListItemText
                primary={message.name}
                secondary={
                  <Typography
                    sx={{ display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {message.content}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
    </div>
  );
}

export default ForumPage;
