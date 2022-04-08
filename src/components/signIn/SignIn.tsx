import { FC, useState } from "react";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Submit from "./Submit";
import { ISignIn } from "types";
import {
  SignInDivStyles,
  SignInFormStyles,
  SignInImgStyles,
  SignInStyles,
} from "styles/styles";
import logo from "./media/logo.png";
import SingInInput from "./SingInInput";
import { FailVerification } from "./FailVerification";
import { loadData } from "utils/getFunctions";

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
      loadData();
      navigate("/home");
    }
  };

  return (
    <SignInStyles>
      <FailVerification isActive={verificationStatus} />
      <SignInImgStyles src={logo} alt="logo" />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <SignInFormStyles onSubmit={handleSubmit}>
            <SingInInput name="login" lableText={t("Username or email")} />
            <SingInInput name="password" lableText={t("Password")} />
            <SignInDivStyles>
              <Submit />
            </SignInDivStyles>
          </SignInFormStyles>
        )}
      />
    </SignInStyles>
  );
};
