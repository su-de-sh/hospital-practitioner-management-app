import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { setMessageObject } from "../reducers/messageReducer";
import { LoadingButton } from "@mui/lab";
import { signIn } from "../services/user";
import { logInUser } from "../reducers/userReducer";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.messages);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    setLoading(true);
    const response = await signIn(email, password);
    console.log("response ,Signin.js ,[22]", response);
    if (response.error) {
      setLoading(false);
      dispatch(setMessageObject(response.error));
    } else {
      setLoading(false);
      window.localStorage.setItem("user", JSON.stringify(response));
      dispatch(logInUser(email, password));
      navigate("/");
    }
  };

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
            <TextField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="outlined"
              sx={{ mt: 4 }}
              error={!email ? true : false}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="outlined"
              sx={{ mt: 2 }}
              error={!password ? true : false}
              required
            />
            {message ? (
              <Typography sx={{ color: "error.main", fontSize: "10px" }}>
                {" "}
                {message}{" "}
              </Typography>
            ) : null}
            <Typography
              sx={{
                mt: 2,
              }}
            >
              Don't have an account?{" "}
              <Link to="/Signin" style={{ color: "green" }}>
                SignUp
              </Link>
            </Typography>
            <LoadingButton
              loading={loading}
              variant="outlined"
              size="large"
              onClick={handleSignin}
              sx={{
                mt: 2,
                color: "white",
                backgroundColor: "green",
                ":hover": {
                  cursor: "pointer",

                  backgroundColor: "primary.main",
                  color: "black",
                },
              }}
              disabled={!email || !password ? true : false}
            >
              Signin
            </LoadingButton>
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

export default Signin;
