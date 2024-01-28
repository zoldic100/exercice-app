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
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);
      
      const exerciseVideoData = await fetchData(`
      ${youtubeUrl}/search?query=${exerciseDetail.name+' exercices'}`,youtubeOptions)
      console.log(exerciseDetail.name+' gym exercices');
      setExerciseVideos(exerciseVideoData.contents)
    };

    fetchExerciseData();
  }, [id]);
  console.log(exerciseDetail);
  return (
    <>
    {Object.keys(exerciseDetail).length  > 0 ?<Details data={exerciseDetail} /> : navigate('/') }
      
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    </>
  );
};

export default ExerciseDetail;
