import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removePractitioner } from "../reducers/practitionerReducer";

const PractitionerList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const practitioners = useSelector((state) => state.practitioners);
  const handleClick = (id) => {
    navigate(`/practitioner/${id}`);
  };
  const handleDelete = (id) => {
    console.log("id ,PractitionerList.js ,[33]", id);

    dispatch(removePractitioner(id));
  };
  const tableHeader = [
    "Avatar",
    "Basic Info",
    "isIcuSpecialist",
    "Contact",
    "Email",
    "City",
  ];

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader.map((header, index) => (
                <TableCell key={index}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "subtext.primary",
                    }}
                  >
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {practitioners.map((practitioner) => (
              <TableRow
                key={practitioner.id}
                onClick={() => handleClick(practitioner.id)}
                sx={{
                  ":nth-of-type(even)": { backgroundColor: grey[200] },
                  backgroundColor: grey[300],

                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: grey[400],
                  },
                }}
              >
                <TableCell>
                  <Avatar src={practitioner.profilePic} shape="circle" />
                </TableCell>
                <TableCell>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        fontFamily: "MarkOT",
                      }}
                    >
                      {practitioner.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "subtext.secondary",
                      }}
                    >
                      {practitioner.designation}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {practitioner.isIcuSpecialist ? (
                    <Icon
                      icon="mdi:tick-circle-outline"
                      color="green"
                      width="24"
                    />
                  ) : (
                    <Icon
                      icon="gridicons:cross-circle"
                      color="red"
                      width="24"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "subtext.primary",
                      fontFamily: "MarkOT",
                    }}
                  >
                    {practitioner.contact}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "subtext.primary",
                      fontFamily: "MarkOT",
                    }}
                  >
                    {practitioner.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "subtext.primary",
                      fontFamily: "MarkOT",
                    }}
                  >
                    {practitioner.address?.split(",")[0]}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Box
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        color: "red",
                      },
                    }}
                  >
                    <Icon
                      icon="mdi:delete"
                      width="20"
                      onClick={(e) => {
                        e.stopPropagation();

                        handleDelete(practitioner.id);
                      }}
                    />
                  </Box>
                  {/* <Popover
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
                    onClose={(e) => {
                      e.stopPropagation();
                      setAnchorEl(null);
                    }}
                  >
                    <Grid container>
                      <Grid item xs={24}>
                        <Button
                          variant="text"
                          color="secondary"
                          fullwidth
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            console.log(
                              "practitioner.id ,PractitionerList.js ,[183]",
                              practitioner.id
                            );
                            handleDelete(practitioner.id);
                          }}
                        >
                          <Icon icon="mdi:delete" width={20} />
                          Delete
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="text" color="secondary">
                          <Icon icon="mdi:edit" width={20} />
                          Edit
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="text" color="secondary">
                          <Icon icon="mdi:delete" width={20} />
                          Mark Icu specialist
                        </Button>
                      </Grid>
                    </Grid>
                  </Popover> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PractitionerList;
