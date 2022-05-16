import { useTranslation } from "react-i18next";
import { LoadingStyles } from "styles/styles";

export const Loading = () => {
  const { t } = useTranslation();

  return <LoadingStyles> {t("Loading...")}</LoadingStyles>;
};
