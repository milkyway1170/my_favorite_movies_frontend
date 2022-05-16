import { useQuery } from "@apollo/client";

import { ErrorView } from "components/ErrorView";
import { Loading } from "components/Loading";
import { useTranslation } from "react-i18next";
import { USER_INFO } from "utils/gqlFunctions";
import { Logout } from "./Logout";
import { GreetingStyles, GreetingTextStyles } from "./mainPageStyles";

export const Greeting = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(USER_INFO);

  if (loading) return <Loading />;
  if (error) {
    return <ErrorView errorList={[error]} />;
  }

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
