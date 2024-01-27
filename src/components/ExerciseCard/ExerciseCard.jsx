import React from "react";
import { Link } from "react-router-dom";
import exerciseImg from "../../assets/images/exerciseImg.gif";
import { Stack, Button } from "@mui/material";

const ExerciseCard = ({ exercise, key }) => {
  return (
    <div key={key}>
    <Link  className="exercise-card" to={`exercice/${exercise.id}`}>
      {exercise.images[0] ? (
        <img src={exercise.images[0].image} alt=""  loading="lazy" />
      ) : (
        <img src={exerciseImg} alt="" loading="lazy" />
      )}
      <Stack direction={"row"}>
        <Button 
        sx={{ml:'24px',color:'#fff',background:'red',
        fontSize:'14px', borderRadius:'20px'}}>
            {exercise.category.name}
        </Button>
      
      </Stack>
      <p className=" ml-[21px] font-bold mt-6 capitalize text-3px ">
      {exercise.name}
      </p>
    </Link>
    </div>
  );
};

export default ExerciseCard;
