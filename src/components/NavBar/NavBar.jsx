import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="bg-orange-100 px-6">
        <Stack
          direction="row"
          justifyContent="none"
          alignItems="center"
          spacing={2}
          sx={{ gap: { sm: "122px", xs: "40px" } }}
        >
          <div>
            <Link to={"/"}>
              <img src={logo} className=" w-[48px] h-[48px] my-2 mx-5" />
            </Link>
          </div>
          

          <div className="text-neutral-700 font-semibold" >
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            >
              <Link to={"/"} >
                Home
              </Link>
              <a href="#exercises" >Exercise </a>
            </Stack>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default NavBar;
