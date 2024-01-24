import { Box, Button } from "@mui/material";
import HeroImg from "../../assets/images/heroBanner.jpg";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="bg-orange-100 rounded-br-xl rounded-bl-xl text-center lg:text-start">
    <Box
      sx={{
        pt: { lg: "150px", xs: "70px" },
        ml: { sm: "40px" },
        position: "relative",
        
      }}
      p={"20px"}
      
    >
      <div className="text-orange-600 font-semibold sm:text-3xl   lg:text-4xl mb-2">
        Stay Fit
      </div>
      <div className="text-gray-800 font-bold sm:text-5xl lg:text-8xl mb-2 ">
        Sweat, Smile <br /> And Repeat
      </div>
      <div className="text-gray-800 font-semibold sm:text-xl lg:text-3xl mb-5">
        check out the most effective exercices
      </div>

      <Button href="#exercises" 
      variant="contained"  
      sx={{mb:{md:'10px'},
      padding:'10px',
      backgroundColor:'#ea580c',
      borderRadius:'10px'
      }}>
        Explor exercises{" "}
      </Button>

      <div 
      className="uppercase font-semibold text-red-700 opacity-10 hidden lg:block text-9xl text-center mt-14">
          exercices
      </div>
      <img src={HeroImg} alt="gym" className="hero-banner-img" />
    </Box>
    </div>
  );
};

export default HeroBanner;
