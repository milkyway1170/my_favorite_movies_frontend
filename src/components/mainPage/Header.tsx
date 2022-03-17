import { useTranslation } from "react-i18next";
import { HeaderStyles } from "../../styles/Styles";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <HeaderStyles>
      <header>
        <h1>{t("My favorite cinema")}</h1>
      </header>
    </HeaderStyles>
  );
};

export default Header;
