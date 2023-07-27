import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const user = sessionStorage.getItem("user");
  const isAuthenticated = user && !!JSON.parse(user).id;
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const user = sessionStorage.getItem("user");
  const isAuthenticated = user && !!JSON.parse(user).id;
  if (isAuthenticated) {
    return <Navigate to="/coffee" state={{ from: location }} replace />;
  }

  return children;
};
