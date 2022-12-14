import { Icon } from "@iconify/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const DrawerNav = () => {
  const DashboardOptions = [
    { title: "Practitioners", icon: "mdi:home", link: "/" },
    { title: "Patients", icon: "mdi:account-group", link: "/patients" },
    { title: "Vaccine", icon: "tabler:vaccine", link: "/vaccine" },
    { title: "Nurse", icon: "fa-solid:user-nurse", link: "/nurse" },
    { title: "Allergies", icon: "mdi:allergy", link: "/allergies" },

    { title: "Help", icon: "mdi:help-circle", link: "/help" },
    { title: "Settings", icon: "mdi:settings", link: "/settings" },
    { title: "About", icon: "mdi:information", link: "/about" },
  ];
  return (
    <Container sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
      <Logo />

      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          {DashboardOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                alignItems: "center",

                borderBottom: "1px solid grey",
                mt: 4,
                ":hover": {
                  borderBottom: "1px solid ",
                  color: "primary.main",
                },
              }}
            >
              <Link
                to={option.link}
                style={{
                  gap: "8px",
                  marginTop: "8px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Icon icon={option.icon} color="white" width="26px" />
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {option.title}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default DrawerNav;
