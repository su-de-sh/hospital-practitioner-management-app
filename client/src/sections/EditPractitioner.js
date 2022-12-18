import { LoadingButton } from "@mui/lab";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useDispatch } from "react-redux";
import {
  addPractitioner,
  updatePractitioner,
} from "../reducers/practitionerReducer";
import { useNavigate } from "react-router";
import LoadingScreen from "../components/LoadingScreen";
const EditPractitioner = ({ practitioner }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPractitioner, setNewPractitioner] = useState({
    name: practitioner.name,
    email: practitioner.email,
    contact: practitioner.contact,
    address: practitioner.address,
    designation: practitioner.designation,
    workingDays: practitioner.workingDays,
    dob: practitioner.dob,
    isIcuSpecialist: practitioner.isIcuSpecialist,

    startTime: practitioner.startTime,
    endTime: practitioner.endTime,
  });

  const [loading, setLoading] = useState(false);
  if (!practitioner) return <LoadingScreen />;
  const editPractitioner = (e) => {
    e.preventDefault();
    setLoading(true);

    // const newpractitioner = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   contact: e.target.phone.value,
    //   address: e.target.address.value,
    //   designation: e.target.designation.value,
    //   photo: e.target.profilepic.value,
    //   dob: practitioner.dob,
    //   startTime: practitioner.startTime,
    //   endTime: practitioner.endTime,
    //   isIcuSpecialist: practitioner.isIcuSpecialist,
    //   workingDays: e.target.workingDays.value,
    // };
    dispatch(updatePractitioner(practitioner.id, newPractitioner));
    navigate("/");
  };
  return (
    <Container component={Paper} maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {" "}
          Edit Practitioner{" "}
        </Typography>

        <Box component="form" onSubmit={editPractitioner} sx={{ mt: 1 }}>
          <Stack spacing={2} direction="row">
            <Grid container item xs={12} gap={0.5}>
              <Grid item xs={11}>
                <TextField
                  label="Name"
                  value={newPractitioner.name}
                  onChange={(e) => {
                    setNewPractitioner((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                  name="name"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={11}>
                <TextField
                  label="Email"
                  value={newPractitioner.email}
                  onChange={(e) => {
                    setNewPractitioner((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  name="email"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={11}>
                <TextField
                  label="Phone"
                  value={newPractitioner.contact}
                  onChange={(e) => {
                    setNewPractitioner((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }));
                  }}
                  name="phone"
                  size="small"
                  type="number"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={11}>
                <TextField
                  label="Address"
                  value={newPractitioner.address}
                  onChange={(e) => {
                    setNewPractitioner((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }));
                  }}
                  name="address"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Designation"
                  value={newPractitioner.designation}
                  onChange={(e) => {
                    setNewPractitioner((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }));
                  }}
                  name="designation"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Working Days"
                  value={newPractitioner.workingDays}
                  onChange={(e) => {
                    setNewPractitioner((prev) => ({
                      ...prev,
                      workingDays: e.target.value,
                    }));
                  }}
                  name="workingDays"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} gap={0.5}>
              <Grid item xs={11}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3} xs={11}>
                    <DatePicker
                      label="Date of Birth"
                      value={newPractitioner.dob}
                      onChange={(newValue) => {
                        setNewPractitioner((prev) => ({
                          ...prev,
                          dob: newValue,
                        }));
                      }}
                      renderInput={(params) => (
                        <TextField
                          id="dob"
                          sx={{ mt: 2 }}
                          size="small"
                          {...params}
                        />
                      )}
                    />

                    <TimePicker
                      label="startTime"
                      value={newPractitioner.startTime}
                      onChange={(newValue) => {
                        setNewPractitioner((prev) => ({
                          ...prev,
                          startTime: newValue,
                        }));
                      }}
                      renderInput={(params) => (
                        <TextField {...params} size="small" />
                      )}
                    />
                    <TimePicker
                      label="endTime"
                      value={newPractitioner.endTime}
                      onChange={(newValue) => {
                        setNewPractitioner((prev) => ({
                          ...prev,
                          endTime: newValue,
                        }));
                      }}
                      renderInput={(params) => (
                        <TextField {...params} size="small" />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={11}>
                <InputLabel htmlFor="upload-photo">Upload Photo</InputLabel>

                <TextField type="file" name="profilepic" accept="image/*" />
              </Grid>
              <Grid item xs={11}>
                <FormControlLabel
                  label="isIcuSpecialist?"
                  control={
                    <Checkbox
                      onChange={() => {
                        setNewPractitioner((prev) => ({
                          ...prev,
                          isIcuSpecialist: !prev.isIcuSpecialist,
                        }));
                      }}
                    />
                  }
                  id="checkbox"
                />
              </Grid>
              <Grid item xs={11}>
                <LoadingButton
                  loading={loading}
                  type="submit"
                  sx={{ mt: 4 }}
                  variant="contained"
                >
                  Update
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default EditPractitioner;
