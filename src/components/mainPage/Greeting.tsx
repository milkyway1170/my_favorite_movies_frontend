import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";

import { GetData } from "../GetFunctions";
import Logout from "./Logout";

const GreetingStyles = styled.div`
  ${tw`
    bg-[#e2e8f0]
    flex flex-row justify-end items-center
    mt-4 mr-32  
    space-x-4 
  `}
  & {
    h2,
    button {
      ${tw`text-4xl font-semibold`}
    }
  }
`;

const Greeting = () => {
  const { t, i18n } = useTranslation();

  return (
    <GreetingStyles>
      <h2>
        {t("Hello, ")}
        {GetData("login")}
      </h2>
      <Logout />
    </GreetingStyles>
  );
};

export default Greeting;
