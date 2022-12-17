import { Icon } from "@iconify/react";
import { TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "10vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          ml: 2,
        }}
      >
        <Icon icon="mdi:face-man" color="black" width="32"></Icon>
        <Typography
          variant="h6"
          sx={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "MarkOT",
          }}
        >
          Practitioner List
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          ml: "auto",
        }}
      >
        <Icon icon="material-symbols:add-circle" color="blue" width="36">
          click
        </Icon>
        <Icon icon="mdi:account-circle" color="grey" width="32"></Icon>
      </Box>
    </Box>
  );
};

export default Navbar;
