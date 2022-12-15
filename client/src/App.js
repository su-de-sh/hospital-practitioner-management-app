import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import Signin from "./sections/Signin";
import Signup from "./sections/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
