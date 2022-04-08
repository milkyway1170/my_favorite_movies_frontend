import { FC } from "react";
import { useTranslation } from "react-i18next";

import { FailVerificationStyles } from "styles/styles";
import { IFailVerification } from "types";

export const FailVerification: FC<IFailVerification> = (props) => {
  const { t } = useTranslation();

  return (
    <FailVerificationStyles isActive={props.isActive}>
      {t("Your login or password is incorrect")}
    </FailVerificationStyles>
  );
};
