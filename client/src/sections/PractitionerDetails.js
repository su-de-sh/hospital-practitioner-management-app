import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import LoadingScreen from "../components/LoadingScreen";
import { useNavigate } from "react-router-dom";
import { updatePractitioner } from "../reducers/practitionerReducer";
import { useDispatch } from "react-redux";
const PractitionerDetails = ({ practitioner }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  if (!practitioner) return <LoadingScreen />;

  const handleMarkIcuSpecialist = () => {
    console.log("At line no. [30] of PractitionerDetails.js");
    dispatch(updatePractitioner({ ...practitioner, isIcuSpecialist: true }));
  };

  return (
    <Container component={Paper}>
      <Grid container spacing={1} direction="column">
        <Grid item xs={1} md={1}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Avatar
              src={practitioner.profilePic}
              sx={{ width: 200, height: 200 }}
            />
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Card
                variant="h6"
                sx={{ fontWeight: "bold", color: "secondary.dark" }}
              >
                <CardContent>Phone: {practitioner.contact}</CardContent>
              </Card>

              <Card
                variant="h6"
                sx={{ fontWeight: "bold", color: "secondary.dark" }}
              >
                <CardContent>Email: {practitioner.email}</CardContent>
              </Card>

              <Card
                variant="h6"
                sx={{ fontWeight: "bold", color: "secondary.dark" }}
              >
                <CardContent>Address: {practitioner.address}</CardContent>
              </Card>

              <Card
                variant="h6"
                sx={{ fontWeight: "bold", color: "secondary.dark" }}
              >
                <CardContent>DOB: {practitioner.dob}</CardContent>
              </Card>
            </Card>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  ":hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                Edit
              </Button>
              {practitioner.isIcuSpecialist ? (
                <Button
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    ":hover": {
                      backgroundColor: "blue",
                      color: "white",
                    },
                  }}
                  disabled
                >
                  Mark as Icu Specialist
                </Button>
              ) : (
                <Button
                  onClick={handleMarkIcuSpecialist}
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#000055",
                      color: "white",
                    },
                  }}
                >
                  Mark as Icu Specialist
                </Button>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontFamily: "MarkOT" }}
            >
              {practitioner.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "secondary.dark" }}
            >
              {practitioner.designation}
            </Typography>

            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  isIcuSpecialist?
                </Typography>
              </Box>
              <Box>
                {practitioner.isIcuSpecialist ? (
                  <Icon
                    icon="mdi:tick-circle-outline"
                    color="green"
                    width="24"
                  />
                ) : (
                  <Icon icon="gridicons:cross-circle" color="red" width="24" />
                )}
              </Box>
            </Card>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Table sx={{ border: "1px solid grey" }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Working Days
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Working Hours
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {practitioner.workingDays.map((day, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "secondary.dark",
                      }}
                    >
                      {day}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "secondary.dark",
                      }}
                    >
                      {practitioner.startTime} - {practitioner.endTime}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PractitionerDetails;
