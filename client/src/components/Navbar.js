import { Icon } from "@iconify/react";
import { Avatar, Button, Popover, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { initializeUser } from "../reducers/userReducer";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.messages);
  console.log("message ,Navbar.js ,[11]", message);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(initializeUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  const openUserInfoPopOver = (e) => {
    setAnchorEl(e.currentTarget);
  };

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
          justifyContent: "space-between",
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
          Practitioner Management
        </Typography>
      </Box>
      <Box>
        {message ? (
          <Typography
            variant="h6"
            sx={{
              ml: "4px",
              color: "blue",
              fontWeight: "bold",
            }}
          >
            {message}
          </Typography>
        ) : null}
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
        <Link to="/practitioner/add-new">
          <Icon
            id="add-new-button"
            icon="material-symbols:add-circle"
            color="blue"
            width="36 "
          />
        </Link>

        <Avatar
          src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1670944245/xdmkqbnprfqzi2mhsyby.jpg"
          width="32"
          onClick={openUserInfoPopOver}
        />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          onClose={() => setAnchorEl(null)}
        >
          <Box sx={{ width: "20vw" }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                src="https://res.cloudinary.com/dqgzhdegr/image/upload/v1670944245/xdmkqbnprfqzi2mhsyby.jpg"
                alt="profileImage"
                width="60px"
              />

              <Typography
                sx={{
                  fontFamily: "MarkOT",
                }}
              >
                {user?.email}
              </Typography>
              <Button variant="text" onClick={handleLogout} fullWidth>
                Logout
              </Button>
            </Box>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default Navbar;
