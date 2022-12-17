import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PractitionerCard from "./PractitionerCard";
import DrawerNav from "./DrawerNav";

import { useDispatch, useSelector } from "react-redux";
import { initializePractitioners } from "../reducers/practitionerReducer";

const Home = ({ practitioners }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "98vh",
            backgroundColor: "dark.main",
            border: "2px solid ",
            borderColor: "primary.main",
          }}
        >
          <DrawerNav />
        </Box>
        <Box
          sx={{
            width: "70%",
            height: "98vh",
            backgroundColor: "background.paper",
          }}
        >
          <Navbar />

          <PractitionerCard practitioners={practitioners} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
