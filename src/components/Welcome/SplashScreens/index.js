import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import splash_1 from '../../../assets/splash_1.svg';
import splash_2 from '../../../assets/splash_2.svg';
import splash_3 from '../../../assets/splash_3.svg';

function SplashScreens (props) {
  var items = [
    {
        name: "Исследуйте",
        description: "множество занятий и материалов \n по различным темам и направлениям",
        image: splash_1
    },
    {
        name: "Занимайтесь",
        description: "в подходящее время, в удобном месте, \n с лучшими преподавателями",
        image: splash_2
    },
    {
      name: "Создавайте",
      description: "собственные курсы и занятия",
      image: splash_3
  }

  ]

  return (
      <Carousel>
          {
              items.map( (item, i) => <Item key={i} item={item} /> )
          }
      </Carousel>
  )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.image} alt='man doing yoga' />
            <Button className="CheckButton">
                ПРИСОЕДЕНИТЬСЯ
            </Button>
        </Paper>
    )
}

export default SplashScreens;