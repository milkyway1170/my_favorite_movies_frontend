import { FC, useState } from "react";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Submit from "./Submit";
import { ISignIn } from "../../types/types";
import FormStyles from "../../styles/Styles";
import logo from "./media/logo.png";
import SingInInput from "./SingInInput";
import { FailVerification } from "./FailVerification";

const SignIn: FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [verificationStatus, setVerificationStatus] = useState<boolean>(true);

  const verification = (login: string, password: string) => {
    const verifyData = JSON.parse(localStorage.getItem("usersData") || "{}");
    if (password === verifyData[login].password) {
      const userData = {
        login: login,
        password: verifyData[login].password,
        favoriteGenres: verifyData[login].favoriteGenres,
        favoriteMovies: verifyData[login].favoriteMovies,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      return true;
    } else {
      setVerificationStatus(false);
      return false;
    }
  };

  const onSubmit = (value: ISignIn): void => {
    if (verification(value.login, value.password)) {
      navigate("/home");
    }
  };

  return (
    <FormStyles>
      <FailVerification isActive={verificationStatus} />
      <img src={logo} alt="logo"></img>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <SingInInput name="login" lableText={t("Username or email")} />
            <SingInInput name="password" lableText={t("Password")} />
            <div>
              <Submit />
            </div>
          </form>
        )}
      />
    </FormStyles>
  );
};

export default SignIn;
