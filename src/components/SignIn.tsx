import React, { FC } from 'react';
import { Form } from 'react-final-form'
import { useNavigate } from 'react-router-dom';

import SingInInput from './SingInInput'
import Submit from './Submit';
import RememberMe from './RememberMe';
import { ISignIn } from '../types/types';
import FormStyles from '../styles/Styles';

const SignIn : FC = () => {
  const navigate = useNavigate();

  const checkUsersData = () => {
    if (localStorage.getItem('usersData') === null) {
      const usersData = { 'admin':'admin', 'vladislav.bublik@kodep.ru': 'password' };
      localStorage.setItem('usersData', JSON.stringify(usersData));
    }
  }

  const verification = (login : string, password : string) => {
    const verifyData = JSON.parse(localStorage.getItem('usersData')|| '{}');
    var result = false;
    Object.keys(verifyData).forEach( varifyLogin => {
      if(login===varifyLogin && password === verifyData[varifyLogin]){
        result = true;
      }
    })
    return result;
  }

  const onSubmit = (value:ISignIn) => {
    checkUsersData();
    if(value.login!==null && value.login!==null){
      const userData = {login: value.login, password: value.password, rememberMe: value.rememberMe};
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      alert('Your login or password is empty');
    }
    (verification(value.login, value.password))? navigate('/home'): alert('Your login and password is incorrect');
  }
  
  return (
    <FormStyles>
      <img src='https://odesk-prod-portraits.s3.amazonaws.com/Companies:2492481:CompanyLogoURL?AWSAccessKeyId=AKIAIKIUKM3HBSWUGCNQ&Expires=2147483647&Signature=Yt%2ByIRoJhCvraY12u6ZJTsATPeM%3D'></img>
      <Form 
        onSubmit={onSubmit}
        render={({ handleSubmit })=> (
          <form onSubmit={handleSubmit}>
            <SingInInput 
              name="login"
              lableText="Имя пользователя или email"
            />
            <SingInInput 
              name="password"
              lableText="Пароль"
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