import { useTranslation } from "react-i18next";

import { getData } from "utils/getFunctions";
import { Logout } from "./Logout";
import { GreetingStyles, GreetingTextStyles } from "./mainPageStyles";

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
