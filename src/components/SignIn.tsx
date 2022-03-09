import React, { FC } from 'react';
import { Form } from 'react-final-form'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SingInInput from './SingInInput'
import Submit from './Submit';
import RememberMe from './RememberMe';
import CheckUsersData from './CheckUsersData';
import { ISignIn } from '../types/types';
import FormStyles from '../styles/Styles';
import Logo from '../media/img/logo.png'

const SignIn : FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const verification = (login : string, password : string) => {
    const verifyData = JSON.parse(localStorage.getItem('usersData')|| '{}');
    var result = false;
    if (verifyData.hasOwnProperty(login) && password === verifyData[login]){
      result = true;
    }
    return result;
  }

  const onSubmit = (value:ISignIn) => {
    CheckUsersData();
    if(verification(value.login, value.password)){
      const userData = {login: value.login, password: value.password, rememberMe: value.rememberMe};
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/home');
    } else {
      alert('Your login and password is incorrect');
    }
  }
  
  return (
    <FormStyles>
      <img src={Logo} alt="logo"></img>
      <Form 
        onSubmit={onSubmit}
        render={({ handleSubmit })=> (
          <form onSubmit={handleSubmit}>
            <SingInInput 
              name="login"
              lableText={t('Имя пользователя или email')}
            />
            <SingInInput 
              name="password"
              lableText={t('Пароль')}
            />
            <div>
              <RememberMe/>
              <Submit/>
            </div>
          </form>
        )}
      />
    </FormStyles>
  );
};

export default SignIn;