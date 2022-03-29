import styled from "styled-components";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

const HeaderStyles = styled.header`
  ${tw`bg-[#1976d2] h-20 flex flex-row justify-center items-center `}
  & {
    h1 {
      ${tw`text-white text-5xl`}
    }
  }
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <HeaderStyles>
      <h1>{t("My favorite cinema")}</h1>
    </HeaderStyles>
  );
};

export default Header;
