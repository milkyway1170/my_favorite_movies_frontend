import { useTranslation } from "react-i18next";
import { GreetingStyles } from "../../styles/Styles";

import { getData } from "../GetFunctions";
import Logout from "./Logout";

const Greeting = () => {
  const { t, i18n } = useTranslation();

  return (
    <GreetingStyles>
      <h2>
        {t("Hello, ")}
        {getData("login")}
      </h2>
      <Logout />
    </GreetingStyles>
  );
};

export default Greeting;
