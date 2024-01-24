import { Box } from "@mui/material";
import React, { createContext, useState } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../../components";

export const BodyPartContext = createContext()
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <BodyPartContext.Provider value={{bodyPart,setExercises,setBodyPart}}>
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
    </BodyPartContext.Provider>
  );
};

export default Home;
