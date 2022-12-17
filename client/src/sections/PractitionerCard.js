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
import React from "react";

const PractitionerCard = ({ practitioners }) => {
  const handleClick = () => {
    console.log("At line no. [119] of PractitionerCard.js");
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
                height: "50px",
                backgroundColor: grey[300],

                ":hover": {
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
                  <Icon icon="gridicons:cross-circle" color="red" width="24" />
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
                  {practitioner.address.split(",")[0]}
                </Typography>
              </TableCell>

              <TableCell>
                <Icon icon="simple-line-icons:options-vertical" color="grey" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PractitionerCard;
