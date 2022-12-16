import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "30%",
            backgroundColor: "black",
            border: "2px solid lightgreen",
          }}
        >
          <Container sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
            <Avatar src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1665602024/samples/cloudinary-icon.png" />
            <Typography
              variant="h4"
              sx={{ mt: 5, fontWeight: "bold" }}
              color="white"
            >
              Sign In
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              borderColor="grey"
              sx={{ mt: 4 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="mdi:email" color="white" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              borderColor="grey"
              sx={{ mt: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="mdi:password" color="white" />
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              sx={{
                color: "white",
                mt: 2,
              }}
            >
              Create new account?{" "}
              <Link to="/signup" style={{ color: "lightgreen" }}>
                SignUp
              </Link>
            </Typography>
            <Button
              fullWidth
              variant="filled"
              sx={{
                mt: 2,
                color: "white",
                backgroundColor: "green",
              }}
            >
              SignIn
            </Button>
          </Container>
        </Box>
        <Box sx={{ width: "70%" }}>
          <img
            src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1665602031/samples/bike.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "0 0",
            }}
            alt="lady"
          />
        </Box>
      </Box>
    </>
  );
};

export default Signup;
