import { Navigate } from "react-router-dom";

import { ProtectedRouteProps } from "types";

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (localStorage.getItem("token")) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
