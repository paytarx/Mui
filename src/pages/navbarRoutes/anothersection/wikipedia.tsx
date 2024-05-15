import React from 'react';
import {
  Container,
  Typography,
  Box
} from '@mui/material';

const WikipediaPage: React.FC = () => {
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
          Material-UI ve React Hook Form Kullanım Talimatları
        </Typography>
        
        <Box sx={{ mt: 3, width: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Material-UI (MUI) Kullanımı
          </Typography>
          <Typography paragraph>
            Material-UI, React bileşen kütüphanesi olup, modern ve özelleştirilebilir UI bileşenleri sunar. Aşağıda, Material-UI ile ilgili temel adımlar bulunmaktadır:
          </Typography>
          <Typography paragraph>
            1. Kurulum:
          </Typography>
          <Typography paragraph sx={{ fontFamily: 'monospace' }}>
            npm install @mui/material @emotion/react @emotion/styled
          </Typography>
          <Typography paragraph>
            2. Temel Kullanım:
          </Typography>
          <Typography paragraph sx={{ fontFamily: 'monospace' }}>
            {`import React from 'react';\nimport { Button } from '@mui/material';\n\nconst App: React.FC = () => {\n  return (\n    <Button variant="contained" color="primary">\n      Merhaba Dünya\n    </Button>\n  );\n};\n\nexport default App;`}
          </Typography>
          <Typography paragraph>
            Daha fazla bilgi ve bileşenler için <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material-UI Dokümantasyonu</a> sayfasını ziyaret edebilirsiniz.
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            React Hook Form Kullanımı
          </Typography>
          <Typography paragraph>
            React Hook Form, React için performans odaklı, esnek ve genişletilebilir form yönetim kütüphanesidir. Aşağıda, React Hook Form ile ilgili temel adımlar bulunmaktadır:
          </Typography>
          <Typography paragraph>
            1. Kurulum:
          </Typography>
          <Typography paragraph sx={{ fontFamily: 'monospace' }}>
            npm install react-hook-form
          </Typography>
          <Typography paragraph>
            2. Temel Kullanım:
          </Typography>
          <Typography paragraph sx={{ fontFamily: 'monospace' }}>
            {`import React from 'react';\nimport { useForm, SubmitHandler } from 'react-hook-form';\n\ninterface IFormInput {\n  example: string;\n  exampleRequired: string;\n}\n\nconst App: React.FC = () => {\n  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();\n  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('example')} />\n      <input {...register('exampleRequired', { required: true })} />\n      {errors.exampleRequired && <span>This field is required</span>}\n      <input type="submit" />\n    </form>\n  );\n};\n\nexport default App;`}
          </Typography>
          <Typography paragraph>
            Daha fazla bilgi ve kullanım örnekleri için <a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">React Hook Form Dokümantasyonu</a> sayfasını ziyaret edebilirsiniz.
          </Typography>
        </Box>
      </Box>
    </Container>
   </div>
  );
};

export default WikipediaPage;
