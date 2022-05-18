import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { delete_cookie } from "sfcookies";

import { LogoutButtonStyles } from "./mainPageStyles";

export const Logout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const deleteSession = () => {
    delete_cookie("token");
    navigate("/");
  };

  return (
    <LogoutButtonStyles onClick={() => deleteSession()}>
      {t("logout")}
    </LogoutButtonStyles>
  );
};
