import { Stack } from "@mui/material";
import React, { useContext } from "react";
import icon from "../../assets/images/dumbbell.png";
import { BodyPartContext } from "../../pages/Home/Home";

const BodyPart = ({ item }) => {
  const itemName = item.item
  const { bodyPart,setBodyPart } = useContext(BodyPartContext);

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      type={"button"}
      className={`bodyPart-card  bg-white gap-[40px] cursor-pointer w-[240px] h-[250px]
    ${bodyPart == itemName && "border-t-4 border-t-red-700"}`}
    onClick={()=>{
      setBodyPart(itemName);
      window.scrollTo({
        top:1800,
        left:100,
        behavior:'smooth'
      })
    }}
    >
      <img src={icon} alt="dumbelle" className=" h-[40px] w-[40px]" />
      {/* // todo Add Img to each category */}
      <h3 className="text-2xl text-red-700 font-bold">{itemName.toUpperCase()}</h3>
    </Stack>
  );
};

export default BodyPart;
