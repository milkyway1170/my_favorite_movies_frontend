import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BtnStyles } from "styles/styles";

const BtnBackToHomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BtnStyles
      onClick={() => {
        navigate("/Home");
      }}
    >
      {t("Back to Home")}
    </BtnStyles>
  );
};

export default BtnBackToHomePage;
