import { isEqual } from "lodash";
import { Navigate } from "react-router-dom";
import { read_cookie } from "sfcookies";

import { CustomRouteProps } from "types";

export default function PublicRoute({
  authenticationPath,
  outlet,
}: CustomRouteProps) {
  if (isEqual(read_cookie("token"), [])) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
