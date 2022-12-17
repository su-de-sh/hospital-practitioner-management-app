import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PractitionerCard from "../components/PractitionerCard";
import DrawerNav from "./DrawerNav";
import axios from "axios";

const Home = () => {
  const [practitionerList, setPractitionerList] = useState([]);
  useEffect(() => {
    console.log("At line no. [11] of Home.js");
    axios
      .get("http://localhost:3001/api/practitioner", {
        headers: {
          authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoiNjM5NDZjMzFiZjg4YTU5MmNiYjM2YmNlIiwiaWF0IjoxNjcxMjY2NzY0LCJleHAiOjE2NzEyNzAzNjR9.AoMT4DY8hsCrWDpiWzwi6W1l_WDmWeE-SDvD83JZNL8",
        },
      })
      .then((res) => {
        console.log("res.data ,Home.js ,[18]", res.data);
        setPractitionerList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

          <PractitionerCard practitioners={practitionerList} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
