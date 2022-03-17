import { FC } from "react";
import { useTranslation } from "react-i18next";

import { GreetingStyles } from "../../styles/Styles";
import { IGreeting } from "../../types/types";
import Logout from "./Logout";

const Greeting: FC<IGreeting> = ({ name }) => {
  const { t, i18n } = useTranslation();
  return (
    <GreetingStyles>
      <h2>
        {t("Hello, ")}
        {name}
      </h2>
      <Logout />
    </GreetingStyles>
  );
};

export default Greeting;
