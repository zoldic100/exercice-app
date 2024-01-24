import "./App.css";
import { Box } from "@mui/material";
import {  Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { ExerciseDetail, Home } from "./pages";

function App() {
  return (
    
    <Box
      width="400px"
      margin={"auto"}
      sx={{ width: { xl: "1488px" } }}
      m="auto"
    >

      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      

      <h1 className="text-xl font-bold underline">Hello world!</h1>
    </Box>
    
  );
}

export default App;
