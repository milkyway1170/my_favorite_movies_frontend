import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { USER_INFO } from "utils/gqlFunctions";
import { Logout } from "./Logout";
import { GreetingStyles, GreetingTextStyles } from "./mainPageStyles";

export const Greeting = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(USER_INFO);

  if (loading) return <div> {t("Loading...")}</div>;
  if (error)
    return (
      <div>
        {t("Error!")} {error.message}
      </div>
    );

  return (
    <GreetingStyles>
      <GreetingTextStyles>
        {t("Hello, ")}
        {data.user.login}
      </GreetingTextStyles>
      <Logout />
    </GreetingStyles>
  );
};
