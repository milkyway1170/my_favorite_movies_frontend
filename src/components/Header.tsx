import { useTranslation } from "react-i18next";

import { HeaderStyles, HeaderTextStyles } from "styles/Styles";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderStyles>
      <HeaderTextStyles>{t("My favorite cinema")}</HeaderTextStyles>
    </HeaderStyles>
  );
};
