import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../components/LoadingScreen";

const AuthGuard = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user && window.location.pathname !== "/signin") {
    window.location.href = "/signin";
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default AuthGuard;
