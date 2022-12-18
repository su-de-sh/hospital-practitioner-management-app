import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

import DrawerNav from "../sections/DrawerNav";

const Home = ({ practitioners, children }) => {
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

          {/* <PractitionerCard practitioners={practitioners} /> */}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Home;
