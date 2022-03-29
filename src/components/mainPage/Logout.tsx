import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const LogoutStyles = styled.div`
  & {
    button {
      ${tw`underline hover:text-gray-400`}
    }
  }
`;

const Logout = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const deleteSession = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <LogoutStyles>
      <button onClick={() => deleteSession()}>{t("logout")}</button>
    </LogoutStyles>
  );
};

export default Logout;
