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
import { Link } from "react-router-dom";

const PractitionerCard = ({ practitioners }) => {
  //   const {
  //     name,
  //     profilePic,
  //     contact,
  //     designation,
  //     email,
  //     address,
  //     isIcuSpecialist,
  //   } = practitioner;
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         flexDirection: "row",
  //         alignItems: "center",
  //         justifyContent: "space-between",
  //         gap: "12px",
  //         height: "50px",
  //         backgroundColor: grey[300],

  //         ":hover": {
  //           backgroundColor: grey[400],
  //         },
  //       }}
  //     >
  //       <Box p={1} flex="auto">
  //         <Avatar src={practitioner.profilePic} shape="circle" />
  //       </Box>
  //       <Box p={1} flex="auto" sx={{ display: "flex", flexDirection: "column" }}>
  //         <Typography
  //           sx={{
  //             fontSize: "14px",
  //             fontWeight: "bold",
  //             fontFamily: "MarkOT",
  //           }}
  //         >
  //           {name}
  //         </Typography>
  //         <Typography
  //           sx={{
  //             fontSize: "12px",
  //             color: "subtext.secondary",
  //           }}
  //         >
  //           {email}
  //         </Typography>
  //       </Box>
  //       <Box p={1} flex="auto">
  //         <Typography
  //           sx={{
  //             fontSize: "13px",
  //             color: "subtext.primary",
  //             fontFamily: "MarkOT",
  //           }}
  //         >
  //           {designation}
  //         </Typography>
  //       </Box>
  //       <Box p={1} flex="auto">
  //         <Icon icon="mdi:tick-circle-outline" color="green" width="24" />
  //       </Box>
  //       <Box p={1} flex="auto">
  //         <Typography
  //           sx={{
  //             fontSize: "13px",
  //             color: "subtext.primary",
  //             fontFamily: "MarkOT",
  //           }}
  //         >
  //           {contact}
  //         </Typography>
  //       </Box>
  //       <Box p={1} flex="auto">
  //         <Typography
  //           sx={{
  //             fontSize: "13px",
  //             color: "subtext.primary",
  //             fontFamily: "MarkOT",
  //           }}
  //         >
  //           {address.split(",")[0]}
  //         </Typography>
  //       </Box>
  //       <Box p={1} flex="auto">
  //         <Typography
  //           sx={{
  //             fontSize: "13px",
  //             color: "subtext.primary",
  //             fontFamily: "MarkOT",
  //           }}
  //         >
  //           98962515456
  //         </Typography>
  //       </Box>
  //       <Box p={1} flex="auto">
  //         <Icon icon="ic:baseline-delete" width="20px" />
  //       </Box>
  //     </Box>
  //   );
  // };
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
            {tableHeader.map((header) => (
              <TableCell>
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
