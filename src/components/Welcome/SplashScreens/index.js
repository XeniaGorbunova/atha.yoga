import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import splash1 from '../../../assets/splash1.svg';
import splash2 from '../../../assets/splash2.svg';
import splash3 from '../../../assets/splash3.svg';

function SplashScreens () {
  let items = [
    {
        name: "Исследуйте",
        description: "множество занятий и материалов \nпо различным темам и направлениям",
        image: splash1
    },
    {
        name: "Занимайтесь",
        description: "в подходящее время, в удобном месте, \nс лучшими преподавателями",
        image: splash2
    },
    {
      name: "Создавайте",
      description: "собственные курсы и занятия",
      image: splash3
    }
  ]

  return (
      <Carousel className="welcome__carousel"
        indicatorContainerProps={{
          style: {
              position: 'absolute', 
              top: 550
              
          }
        }}
      >
          {
              items.map( (item, i) => <Item key={i} item={item} /> )
          }
      </Carousel>
  )
}

function Item(props) {
    return (
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 812,
          }}
        >
          <Typography component="h1" variant="h2" class="header" className="header">
            {props.item.name}
          </Typography>
          <Typography variant="body2" className="welcome__description">
            {props.item.description}      
          </Typography>
          <img className="welcome__img" src={props.item.image} alt='man doing yoga' />
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Присоедениться
          </Button>
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Grid item>
              <Typography variant="body2">
                 Уже есть аккаунт?
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" class="welcome__link">
                Войти
              </Link>
            </Grid>
          </Grid>
        </Box>
    );
}

export default SplashScreens;