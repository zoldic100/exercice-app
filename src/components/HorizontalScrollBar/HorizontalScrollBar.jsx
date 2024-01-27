import { Box, Stack } from '@mui/material'
import React from 'react'
import BodyPart from '../BodyPart/BodyPart'
import './HorizontalScrollBar.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const HorizontalScrollBar = ({data}) => {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <>
    <Slider {...settings}>
        {data.map((item)=>
        <Box
        key ={item.id || item}
        itemID ={item.id || item}
        title ={item.id || item}
        m='0 40px'
        >
            
            <BodyPart item={{item}} />
        </Box>)}
        </Slider>
    </>
  )
}

export default HorizontalScrollBar