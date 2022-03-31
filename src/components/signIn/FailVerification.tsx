import { FC } from "react";
import { useTranslation } from "react-i18next";

import { FailVerificationStyles } from "../../styles/Styles";
import { IFailVerification } from "../../types/types";

export const FailVerification: FC<IFailVerification> = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <FailVerificationStyles isActive={props.isActive}>
      {t("Your login or password is incorrect")}
    </FailVerificationStyles>
  );
};
