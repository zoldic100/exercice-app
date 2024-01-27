import { Box, Pagination, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { BodyPartContext } from "../../pages/Home/Home";
import { ExerciseCard } from "../";
const Exercises = () => {
  const { exercises } = useContext(BodyPartContext);
  const [currentPage , setCurrentPage] =useState(1)
  const exercisesPerPage = 3;

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const curretExercises =exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate = (e,value)=>{
    setCurrentPage(value)

    window.scrollTo({top:1800 , behavior:'smooth'})
  }
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <div>Showing Results</div>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {curretExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems={'center'}>
        {exercises.length > 3 && (
          <>
          {/* munite : 1:30 */}
            <Pagination 
            count={Math.ceil(exercises.length /exercisesPerPage)}
             variant="outlined" 
             page={currentPage}
             onChange={paginate}
             />
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
