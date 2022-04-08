import { useTranslation } from "react-i18next";

import { GreetingStyles, GreetingTextStyles } from "styles/styles";
import { getData } from "utils/getFunctions";
import { Logout } from "./Logout";

export const Greeting = () => {
  const { t } = useTranslation();

  return (
    <GreetingStyles>
      <GreetingTextStyles>
        {t("Hello, ")}
        {getData("login")}
      </GreetingTextStyles>
      <Logout />
    </GreetingStyles>
  );
};
