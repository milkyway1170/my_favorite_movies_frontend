import { useTranslation } from "react-i18next";
import { LoadigStyles } from "styles/styles";

export const Loading = () => {
  const { t } = useTranslation();

  return <LoadigStyles> {t("Loading...")}</LoadigStyles>;
};
