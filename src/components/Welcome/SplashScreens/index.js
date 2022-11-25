import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import splash_1 from '../../../assets/splash_1.svg';
import splash_2 from '../../../assets/splash_2.svg';
import splash_3 from '../../../assets/splash_3.svg';

const theme = createTheme();

function SplashScreens (props) {
  let items = [
    {
        name: "Исследуйте",
        description: "множество занятий и материалов \nпо различным темам и направлениям",
        image: splash_1
    },
    {
        name: "Занимайтесь",
        description: "в подходящее время, в удобном месте, \nс лучшими преподавателями",
        image: splash_2
    },
    {
      name: "Создавайте",
      description: "собственные курсы и занятия",
      image: splash_3
    }
  ]

  return (
      <Carousel
        indicatorContainerProps={{
          style: {
              position: 'fixed', 
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
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            ПРИСОЕДЕНИТЬСЯ
          </Button>
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Grid item>
              <Typography variant="body2">
                 Уже есть аккаунт?
              </Typography>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" class="link">
                Войти
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
    );
}

export default SplashScreens;