import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const signIn = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "95vh",
        }}
      >
        <Box
          sx={{
            width: "30%",
            backgroundColor: "background.paper",
            border: "2px solid ",
            borderColor: "black",
          }}
        >
          <Container sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
            <Logo />
            <Typography variant="h4" sx={{ mt: 5, fontWeight: "bold" }}>
              Sign In
            </Typography>
            <TextField label="Email" variant="outlined" sx={{ mt: 4 }} />
            <TextField label="Password" variant="outlined" sx={{ mt: 2 }} />
            <Typography
              sx={{
                mt: 2,
              }}
            >
              Click here to create new account{" "}
              <Link to="/signin" style={{ color: "green" }}>
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
                ":hover": {
                  bgcolor: "primary.main",
                  color: "black",
                },
              }}
            >
              signIn
            </Button>
          </Container>
        </Box>
        <Box sx={{ width: "70%" }}>
          <img
            src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1671277498/DALL_E_2022-12-17_17.29.36_-_dark_image_with_doctor_in_it_in_nepali_theme_more_realistic_fxz11k.png"
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

export default signIn;
