import React from 'react';
import { Field } from 'react-final-form'
import { RememberMeStyles } from '../styles/Styles';

const RememberMe = () => {
  return (
    <RememberMeStyles>
     <div>
        <Field
         name="rememberMe"
         component="input"
          type="checkbox"
          value="true"
        />
        <label>
          Запомнить меня
        </label>
      </div>
    </RememberMeStyles>
  );
};

export default RememberMe;