import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BtnStyles } from "@styles";

const AddNewFavoriteMovie = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BtnStyles
      onClick={() => {
        navigate("/add");
      }}
    >
      {t("Add")}
    </BtnStyles>
  );
};

export default AddNewFavoriteMovie;
