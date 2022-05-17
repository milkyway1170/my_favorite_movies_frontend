import { FC, useEffect, useState } from "react";
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
} from "./signInStyles";
import logo from "./media/logo.png";
import SingInInput from "./SingInInput";
import { FailVerification } from "./FailVerification";
import { useMutation } from "@apollo/client";
import { SIGN_IN_MUTATION } from "utils/gqlFunctions";
import { ErrorView } from "components/ErrorView";

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [verificationStatus, setVerificationStatus] = useState<boolean>(true);
  const [verification, { error }] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      if (data) {
        localStorage.setItem("token", data.signIn.token);
        navigate("/home");
        setVerificationStatus(true);
      }
    },
    onError(error) {
      setVerificationStatus(false);
      console.log(error);
    },
  });

  const onSubmit = (value: ISignIn): void => {
    verification({
      variables: { login: value.login, password: value.password },
    });
  };

  return (
    <SignInStyles>
      <FailVerification isActive={verificationStatus} />
      <SignInImgStyles src={logo} alt="logo" />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <SignInFormStyles onSubmit={handleSubmit}>
            <SingInInput
              name="login"
              type="text"
              lableText={t("Username or email")}
            />
            <SingInInput
              name="password"
              type="password"
              lableText={t("Password")}
            />
            <SignInDivStyles>
              <Submit />
            </SignInDivStyles>
          </SignInFormStyles>
        )}
      />
    </SignInStyles>
  );
};
