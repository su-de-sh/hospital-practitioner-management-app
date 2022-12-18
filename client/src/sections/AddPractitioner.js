import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
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
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useDispatch } from "react-redux";
import { addPractitioner } from "../reducers/practitionerReducer";

const AddPractitioner = () => {
  const dispatch = useDispatch();
  const [practitioner, setPractitioner] = useState({
    dob: dayjs("2022-12-18"),
    isIcuSpecialist: false,

    startTime: dayjs("2022-12-18T10:00:00.000Z"),
    endTime: dayjs("2022-12-18T10:00:00.000Z"),
  });

  const [loading, setLoading] = useState(false);

  const addNewPractitioner = (e) => {
    e.preventDefault();
    setLoading(true);

    const newpractitioner = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.phone.value,
      address: e.target.address.value,
      designation: e.target.designation.value,
      photo: e.target.profilepic.value,
      dob: practitioner.dob,
      startTime: practitioner.startTime,
      endTime: practitioner.endTime,
      isIcuSpecialist: practitioner.isIcuSpecialist,
      workingDays: e.target.workingDays.value.split(","),
    };
    dispatch(addPractitioner(newpractitioner));
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
          Add new Practitioner{" "}
        </Typography>

        <Box component="form" onSubmit={addNewPractitioner} sx={{ mt: 1 }}>
          <Stack spacing={2} direction="row">
            <Grid container item xs={12} gap={0.5}>
              <Grid item xs={11}>
                <TextField
                  label="Name"
                  name="name"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={11}>
                <TextField
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={11}>
                <TextField
                  label="Phone"
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
                  name="address"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Designation"
                  name="designation"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Working Days"
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
                      value={practitioner.dob}
                      onChange={(newValue) => {
                        setPractitioner((prev) => ({
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
                      value={practitioner.startTime}
                      onChange={(newValue) => {
                        setPractitioner((prev) => ({
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
                      value={practitioner.endTime}
                      onChange={(newValue) => {
                        setPractitioner((prev) => ({
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
                  value={practitioner.isIcuSpecialist}
                  control={
                    <Checkbox
                      onChange={() => {
                        setPractitioner((prev) => ({
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
                  Add
                </LoadingButton>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default AddPractitioner;
