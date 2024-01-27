import { Stack, TextField, Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import { HorizontalScrollBar } from "../../components";
import { BodyPartContext } from "../../pages/Home/Home";

const SearchExercises = () => {
  const { setExercises, exercises,  } = useContext(BodyPartContext);


  const url = "https://wger.de/api/v2/exerciseinfo";
  const CategoriesUrl = "https://wger.de/api/v2/exercisecategory/";
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercicesData = async () => {
      const { results } = await fetchData(CategoriesUrl, exerciseOptions);
      const names = results.map((result) => result.name);

      setBodyParts(["all", ...names]);
    };

    fetchExercicesData();
  }, []);
  const hundleSearch = async () => {
    if (search) {
      const { results } = await fetchData(url, exerciseOptions);

      const searchedExercices = results.filter(
        (exercise) =>
          exercise.category.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.description.toLowerCase().includes(search.toLowerCase())
      );
      const names = searchedExercices.map((result) => result);

      setExercises(names);
      console.log(names);
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
            setSearch(e.target.value);
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
        <HorizontalScrollBar data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
