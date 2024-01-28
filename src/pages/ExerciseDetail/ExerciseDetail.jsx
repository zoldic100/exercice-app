import React, { useEffect, useState } from 'react';
import { Details, ExerciseVideo } from '../../components';
import { useNavigate, useParams } from 'react-router';
import { exerciseOptions, fetchData } from '../../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = `https://wger.de/api/v2/exerciseinfo`;

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);
    };

    fetchExerciseData();
  }, [id]);
  console.log(exerciseDetail);
  return (
    <>
    {Object.keys(exerciseDetail).length  > 0 ?<Details data={exerciseDetail} /> : navigate('/') }
      
      <ExerciseVideo />
    </>
  );
};

export default ExerciseDetail;
