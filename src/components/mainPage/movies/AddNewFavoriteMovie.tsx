import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { BtnStyles } from "../../../styles/Styles";

const AddNewFavoriteMovie = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <BtnStyles>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {t("Add")}
      </button>
    </BtnStyles>
  );
};

export default AddNewFavoriteMovie;
