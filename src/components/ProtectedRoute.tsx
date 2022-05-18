import { Navigate } from "react-router-dom";

import { CustomRouteProps } from "types";

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: CustomRouteProps) {
  if (localStorage.getItem("token")) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
