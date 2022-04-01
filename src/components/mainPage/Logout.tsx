import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LogoutStyles } from "../../styles/Styles";

const Logout = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const deleteSession = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <LogoutStyles>
      <button onClick={() => deleteSession()}>{t("logout")}</button>
    </LogoutStyles>
  );
};

export default Logout;
