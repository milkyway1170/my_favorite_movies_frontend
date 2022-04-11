import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LogoutButtonStyles } from "./mainPageStyles";

export const Logout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const deleteSession = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <LogoutButtonStyles onClick={() => deleteSession()}>
      {t("logout")}
    </LogoutButtonStyles>
  );
};
