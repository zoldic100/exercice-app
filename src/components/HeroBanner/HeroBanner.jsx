import { Box,Button } from '@mui/material'
import HeroImg from '../../assets/images/heroBanner.jpg'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box
    sx={{
      mt:{lg:'212px',xs:'70px'},
      ml:{sm:'40px'}
    }}
    p={'20px'}
    >
      <div 
      className='text-orange-600 font-semibold sm:text-2xl lg:text-2xl mb-2'>
        Stay Fit
      </div>
      <div 
      className='text-gray-600 font-bold sm:text-3xl lg:text-4xl mb-2 '>
       Sweat, Smile <br  /> And Repeat
      </div>
      <div 
      className='text-gray-600 font-semibold sm:text-lg lg:text-xl mb-5'>
       check out the most effective exercices
      </div>

      <Button href='#exercises' variant="contained" color='warning' 
      
      >Explor exercises </Button>
      <img src={HeroImg} alt="gym"  />
    </Box>
  )
}

export default HeroBanner