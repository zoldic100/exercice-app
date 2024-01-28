import { Box, Stack } from '@mui/material';
import React from 'react';

const ExerciseVideo = ({ exerciseVideos, name }) => {
 
  if ( !exerciseVideos || exerciseVideos.length === 0) {
    return <p>No videos available.</p>;
  }


  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
      <h2 className='font-semibold text-3xl mb-8'>
        Watch <span className='text-red-500 capitalize'>{name}</span> exercise videos
      </h2>
      <Stack
        justifyContent={'flex-start'}
        flexWrap={'wrap'}
        alignItems={'center'}
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' },
        }}
      >
        {exerciseVideos?.slice(1, 4).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <h4>{item.video.title}</h4>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
