import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useMatch } from "react-router-dom";
import { initializePractitioners } from "./reducers/practitionerReducer";
import PractitionerDetails from "./sections/PractitionerDetails";
import PractitionerList from "./sections/PractitionerList";
import Signin from "./sections/Signin";
import Signup from "./sections/Signup";
import { initializeUser } from "./reducers/userReducer";
import LoadingScreen from "./components/LoadingScreen";
import GuestGuard from "./guard/GuestGuard";

const App = () => {
  const practitionerList = useSelector((state) => state.practitioners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUser());
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
        <Route
          path="/"
          element={<PractitionerList practitioners={practitionerList} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/signin"
          element={
            <GuestGuard>
              <Signin />
            </GuestGuard>
          }
        />
        <Route
          path="/practitioner/:id"
          element={<PractitionerDetails practitioner={practitioner} />}
        />
      </Routes>
    </>
  );
};

export default App;
