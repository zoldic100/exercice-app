import { Stack, TextField, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import {HorizontalScrollBar} from '../../components'


const SearchExercises = () => {
 
  const url =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10";
  const CategoriesUrl =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercicesData = async () => {
      const bodyPartsData = await fetchData(CategoriesUrl, exerciseOptions);
        
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercicesData()
  }, []);
  const hundleSearch = async () => {
    if (search) {
      const exercicesData = await fetchData(url, exerciseOptions);

      const searchedExercices = exercicesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includs(search) ||
          exercise.bodyPart.toLowerCase().includs(search) ||
          exercise.equipement.toLowerCase().includs(search) ||
          exercise.target.toLowerCase().includs(search)
      );
      setSearch("");
      setExercices(searchedExercices);
    }
  };
  return (
    <Stack
      alignItems={"center"}
      mt={"35px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <div className="mb-8 text-center text-5xl font-semibold">
        Awsome Exercices You <br /> should know
      </div>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            width: { lg: "1000px", sm: "500px", xs: "220px" },
            backgroundColor: "#fff",
          }}
          fullWidth
          id="fullWidth"
          value={search}
          placeholder="shearch for exercise"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
        />
        <Button
        
          variant="contained"
          color="error"
          sx={{
            borderRadius: "0px",
            width: { lg: "170px", xs: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={hundleSearch}
        >
          search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar data={bodyParts}  />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
