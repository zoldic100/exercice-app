import { Box } from "@mui/material";
import React, { createContext, useState } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../../components";

export const BodyPartContext = createContext()
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [test ,setTest] = useState('')
  return (
    <BodyPartContext.Provider value={{bodyPart,setExercises,setBodyPart,exercises, test,setTest}}>
    <Box>
      <HeroBanner />
      <SearchExercises/>
      <Exercises/>
    </Box>
    </BodyPartContext.Provider>
  );
};

export default Home;
