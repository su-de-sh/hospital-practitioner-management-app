import React from "react";
import Home from "../layout/Home";

const PractitionerDetails = ({ practitioner }) => {
  return <Home>{practitioner.name}</Home>;
};

export default PractitionerDetails;
