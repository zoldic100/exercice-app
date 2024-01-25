import { Box, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { BodyPartContext } from '../../pages/Home/Home'

const Exercises = () => {
  const {exercises} = useContext(BodyPartContext)
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <div>
        Showing Results
      </div>
      <Stack direction={'row'}
      sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap={'wrap'} 
      justifyContent={'center'}
      >
        {exercises.map((exercise,index)=>{
         <p>{exercise.name}</p> 
        })}
      </Stack>

    </Box>
  )
}

export default Exercises