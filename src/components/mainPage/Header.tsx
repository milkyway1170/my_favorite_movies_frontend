import { useTranslation } from "react-i18next";
import { HeaderStyles } from "../../styles/Styles";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <HeaderStyles>
      <h1>{t("My favorite cinema")}</h1>
    </HeaderStyles>
  );
};

export default Header;
