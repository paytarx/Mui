import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import StarIcon from "@mui/icons-material/Star"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/favoriteBorder'
import {styled} from '@mui/material/styles'
import axios from 'axios';
import Switch from '@mui/material/Switch'
import TextField  from '@mui/material/TextField'
import { red , blue , orange , amber , blueGrey , brown , cyan} from '@mui/material/colors'

const Mui = () => {
 
    interface Post {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    const [value , setValue] = React.useState<number | null>(2);
    const [hover , setHover] = React.useState(-1)
    const [data ,setData] = React.useState<Post | null >(null)
    const [loading , setLoading] = React.useState(false)
    const [text , setText] = React.useState('')
    const [display , setDisplay] = React.useState('');

    const [inputValue , setInputValue] = React.useState('')
    const [anotherText , setAnotherText] = React.useState('')

    const label = {inputProps : {'aria-label' : 'Checkbox demo'}}
    const labels: { [index: string]: string } = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };
    function getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    const StyledRating = styled(Rating)({
      '& .MuiRating-iconFilled': {
        color: '#ff6d75',
      },
      '& .MuiRating-iconHover': {
        color: '#ff3d47',
      },
    });
      
    type newNameTypeOfStringRequired = any;
    let shortName: newNameTypeOfStringRequired = {
      name:"asd",
      lastName:"gfhfddd",
      age:25
    }
    // console.log(shortName)
    
    


    // Axios instance oluştur
    const create = axios.create();
    
    // Request interceptor
    create.interceptors.request.use(
      function (config) {
        // İstek gönderilmeden önce yapılacak işlemler
        // console.log('Request Interceptor:', config);
        return config;
      },
      function (error) {
        // Hata durumunda yapılacak işlemler
        return Promise.reject(error);
      }
    );
    
    // Response interceptor
    create.interceptors.response.use(
      function (response) {
        // Cevap alındıktan sonra yapılacak işlemler
        // console.log('Response Interceptor:', response);
        return response;
      },
      function (error) {
        // Hata durumunda yapılacak işlemler
        return Promise.reject(error);
      }
    );
    

    // GET isteği yapalım
    useEffect(() => {
      const fetchData = async () => {
          setLoading(true); // İstek başladığında isLoading'u true yap
          try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
              console.log('Response:', response.data);
              setData(response.data);
          } catch (error) {
              console.error('Error:', error);
          } finally {
              setLoading(false); // İstek tamamlandığında isLoading'u false yap
          }
      };

      // isLoading false ise ve data null ise isteği yap
      if (!loading && !data) {
          fetchData();
      }
  }, [loading, data]);

      if(loading){
        return <p>Loading...</p>
      }
   
      const handleButtonClick = () => {
        setDisplay("Text is: " + text);
      }
      
      const handleSetButton = () => {
        setInputValue("Text is :" + anotherText)
      }     
      

  return (
    <div>
        <Button variant="outlined">if u want mountains</Button>
        <Checkbox {...label} defaultChecked size='large' color='success'  />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
        <Box sx={{'& > legend': {mt : 2},
         }}></Box>
        <Switch {...label} defaultChecked  color='success'  />
        <Switch {...label} checked />
        <Switch {...label} disabled />
        <Switch {...label} disabled checked />

         <Typography component="legend">Controlled</Typography>
         <Rating
         name="simple-controlled"
         value={value}
         onChange={(e,newValue) => {
          setValue(newValue);
         }}></Rating>
         <Typography component="legend" variant='h6' >Read Only</Typography>
         <Rating name="read-only" value={value} ></Rating>
         <Typography component="legend" variant='h5'>Disabled</Typography>
         <Rating name='disabled' value={value} disabled ></Rating>
         <Typography component="legend">No rating given</Typography>
         <Rating name='no-value' value={null} disabled ></Rating> 

         <div className='rate-plus'>
         <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        size='large'
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(e, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
         </div>

      <div>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
      </div>
      
      <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                {data ? (
                    <>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                    </>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        )}
    </div>

    <div>
        <TextField id='outlined-basic' label='name' variant='outlined' ></TextField>
        <TextField id='outlined-basic' label='surname' variant='filled' ></TextField>
        <TextField fullWidth id='fullWidth' label='priest' variant='standard' ></TextField>
    </div>

        <div>
        <h2>Text</h2>
        <TextField
         label='text'
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant='outlined'
         >
        </TextField>
        <Button onClick={handleButtonClick} variant='contained' color='primary'>Submit</Button>
        <h3>
          {display}
        </h3>
        </div>
        <div>
          <Typography variant='h5'>Text</Typography>
          <TextField
          label='another text'
          multiline
          rows={4}
          value={anotherText}
          onChange={(e) => setAnotherText(e.target.value)}
          variant='outlined'
          >
          </TextField>
          <Button
          variant='contained'
          color='warning'
          onClick={handleSetButton}
          >
            Submit
          </Button>
          <Typography variant='h5' color={blue[500]} > {inputValue} </Typography>

        </div>

    </div>
  )
}

export default Mui