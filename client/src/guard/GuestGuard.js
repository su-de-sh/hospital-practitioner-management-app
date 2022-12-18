import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../components/LoadingScreen";

const GuestGuard = ({ children }) => {
  const user = useSelector((state) => state.user);

  console.log("user ,GuestGuard.js ,[7]", user, window.location.pathname);

  if (
    user.user &&
    user.isIntialized &&
    window.location.pathname === "/signin"
  ) {
    window.location.href = "/";
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default GuestGuard;
