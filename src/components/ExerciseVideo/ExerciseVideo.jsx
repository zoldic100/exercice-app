import { Box, Stack } from '@mui/material';
import React from 'react';

const ExerciseVideo = ({ exerciseVideos, name }) => {
 
  if ( !exerciseVideos || exerciseVideos.length === 0) {
    return <p>No videos available.</p>;
  }


  return (
    <Box sx={{ marginTop: { lg: '30px', xs: '20px' } }} p='20px'>
      <h2 className='font-semibold text-3xl mb-8'>
        Watch <span className='text-red-500 capitalize text-center'>{name}</span> exercise videos
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
        {exerciseVideos.map((video, ) => (
          <div className='mb-5'>
          <a
            key={video.id.videoId}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className='rounded-lg' />
            <h4 className='mb-5 font-semibold text-center overflow-clip'>{video.snippet.title}</h4>
          </a>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
