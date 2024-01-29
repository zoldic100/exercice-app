import React, { useEffect, useState } from 'react';
import { Details, ExerciseVideo } from '../../components';
import { useNavigate, useParams } from 'react-router';
import { exerciseOptions, fetchData, youtubeOptions } from '../../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = `https://wger.de/api/v2/exerciseinfo`;

      const exerciseDetailData = await fetchData(`
      ${exerciseDbUrl}/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData); 

     

    };
    fetchExerciseData();

  }, [id]);

  
  console.log(exerciseDetail);
  const apiKey = 'AIzaSyBsXLqbwu3TGNShTg4YvzJ2ORTJJ0aOOsE';
  const query = `${exerciseDetail.name} gym exercices`; // Your search query

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&q=${query}&type=video`
                  );
          console.log(response);
        if (!response.ok) {
          const errorMessage = await response.text();
          console.error('Error fetching YouTube data:', errorMessage);
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data.items);
        setExerciseVideos(data.items);

      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    fetchVideo();
  }, [exerciseDetail,apiKey,query]);
  return (
    <>
    {Object.keys(exerciseDetail).length  > 0 ?<Details data={exerciseDetail} /> : navigate('/') }
      
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    </>
  );
};

export default ExerciseDetail;
