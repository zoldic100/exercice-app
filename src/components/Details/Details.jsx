import { useEffect } from "react";
import React from "react";
import exerciseImg from "../../assets/images/exerciseImg.gif";
import { Stack } from "@mui/material";
const Details = ({ data }) => {
  const { name, description, category, muscles, images } = data;
  const categoryName = category ? category.name : null;
  const musclesName = muscles.length > 0 ? muscles[0].name : 'chest';
  const imgUrl = images.length > 0 ? images[0].image : null;
  console.log(data);

  useEffect(() => {
    const paragraph = document.getElementById("desc");
    if (description) {
      paragraph.innerHTML = description;
    }
  }, [description]);

  return (
    <div>
      <Stack
        gap={"60px"}
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        {imgUrl ? (
          <img className="max-w-[600px] max-h-[500px]" src={imgUrl} alt="" loading="lazy" />
        ) : (
          <img className="max-w-[700px] max-h-[500px]" src={exerciseImg} alt="" loading="lazy" />
        )}

        <Stack
          sx={{
            gap: { lg: "35px", xs: "20px" },
            backgroundColor:'#f1f1f1',
            borderRadius:'25px',
            paddingX:'70px',
            paddingY:'50px',
            width:'80%%'
            
          }}
          
        >
          <h1 className="font-bold text-4xl text-red-600">{name}</h1>
          <p id="desc" className="font-medium text-lg"></p>
          <h2 className=" font-semibold text-2xl text-red-600 ">Muscle Groupe : {categoryName}</h2>
          <h2 className="font-semibold text-2xl text-red-600 ">Muscle : {musclesName}</h2>
        </Stack>
      </Stack>
    </div>
  );
};

export default Details;
