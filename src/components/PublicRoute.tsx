import { Navigate } from "react-router-dom";

import { CustomRouteProps } from "types";

export default function PublicRoute({
  authenticationPath,
  outlet,
}: CustomRouteProps) {
  if (!localStorage.getItem("token")) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
