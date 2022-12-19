import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useMatch } from "react-router-dom";

import PractitionerDetails from "./sections/PractitionerDetails";
import PractitionerList from "./sections/PractitionerList";
import Signin from "./sections/Signin";
import Signup from "./sections/Signup";
import { initializeUser } from "./reducers/userReducer";

import DashBoardLayout from "./layout/DashBoardLayout";
import AddPractitioner from "./sections/AddPractitioner";
import EditPractitioner from "./sections/EditPractitioner";
import axios from "axios";

const App = () => {
  const practitionerList = useSelector((state) => state.practitioners);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUser());

    setInterval(() => {
      if (localStorage.user) {
        axios
          .post("/api/users/refresh", {
            refreshToken: JSON.parse(localStorage.user).refreshToken,
          })
          .then((res) => {
            const loggedUser = JSON.parse(localStorage.getItem("user"));

            localStorage.setItem(
              "user",
              JSON.stringify({
                ...loggedUser,
                accessToken: res.data.accessToken,
              })
            );
          });
      }
    }, 1000 * 60 * 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchPractitioner = useMatch("/practitioner/:id");
  const matchPractitionerForEdit = useMatch("/practitioner/:id/edit");

  const practitioner = matchPractitioner
    ? practitionerList?.find((practitioner) => {
        return practitioner.id === matchPractitioner.params.id;
      })
    : null;

  const practitionerForEdit = matchPractitionerForEdit
    ? practitionerList?.find((practitioner) => {
        return practitioner.id === matchPractitionerForEdit.params.id;
      })
    : null;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <DashBoardLayout>
                <PractitionerList />
              </DashBoardLayout>
            ) : (
              <Signin />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <DashBoardLayout>
              <PractitionerList />
            </DashBoardLayout>
          }
        />
        <Route
          path="/practitioner/:id"
          element={
            <DashBoardLayout>
              <PractitionerDetails practitioner={practitioner} />
            </DashBoardLayout>
          }
        />
        <Route
          path="/practitioner/add-new"
          element={
            <DashBoardLayout>
              <AddPractitioner />
            </DashBoardLayout>
          }
        />
        <Route
          path="/practitioner/:id/edit"
          element={
            <DashBoardLayout>
              <EditPractitioner practitioner={practitionerForEdit} />
            </DashBoardLayout>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
