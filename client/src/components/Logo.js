import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottom: "1px solid lightgreen",
      }}
    >
      <Avatar src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1665602024/samples/cloudinary-icon.png" />
      <Typography variant="h4" sx={{ color: "grey", fontFamily: "MarkOT" }}>
        leaphealth
      </Typography>
    </Box>
  );
};

export default Logo;
