import { FC } from "react";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Submit from "./Submit";
import RememberMe from "./RememberMe";
import CheckUsersData from "../CheckUsersData";
import { ISignIn } from "../../types/types";
import FormStyles from "../../styles/Styles";
import Logo from "./media/logo.png";
import { GetGenresList, GetMoviesList } from "../GetFunctions";
import SingInInput from "./SingInInput";

const SignIn: FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const verification = (login: string, password: string) => {
    const verifyData = JSON.parse(localStorage.getItem("usersData") || "{}");
    var result = false;
    if (
      verifyData.hasOwnProperty(login) &&
      password === verifyData[login].password
    ) {
      console.log(login);
      const userData = {
        login: login,
        password: verifyData[login].password,
        favoriteGenres: verifyData[login].favoriteGenres,
        favoriteMovies: verifyData[login].favoriteMovies,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      result = true;
    }
    return result;
  };

  const onSubmit = (value: ISignIn) => {
    CheckUsersData();
    if (verification(value.login, value.password)) {
      navigate("/home");
    } else {
      alert("Your login and password is incorrect");
    }
  };

  return (
    <FormStyles>
      <img src={Logo} alt="logo"></img>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <SingInInput
              name="login"
              lableText={t("Имя пользователя или email")}
            />
            <SingInInput name="password" lableText={t("Пароль")} />
            <div>
              <RememberMe />
              <Submit />
            </div>
          </form>
        )}
      />
    </FormStyles>
  );
};

export default SignIn;
