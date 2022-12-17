import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useMatch } from "react-router-dom";
import { initializePractitioners } from "./reducers/practitionerReducer";
import Details from "./sections/Details";
import Home from "./sections/Home";
import Signin from "./sections/Signin";
import Signup from "./sections/Signup";

const App = () => {
  const practitionerList = useSelector((state) => state.practitioners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePractitioners());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchPractitioner = useMatch("/practitioner/:id");

  const practitioner = matchPractitioner
    ? practitionerList?.find((practitioner) => {
        return practitioner.id === matchPractitioner.params.id;
      })
    : null;
  // console.log("practitioner ,App.js ,[27]", practitioner);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home practitioners={practitionerList} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/practitioner/:id"
          element={<Details practitioner={practitioner} />}
        />
      </Routes>
    </>
  );
};

export default App;
