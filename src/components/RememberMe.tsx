import React from 'react';
import { Field } from 'react-final-form'
import { useTranslation } from 'react-i18next';

import { RememberMeStyles } from '../styles/Styles';

const RememberMe = () => {
  const { t, i18n } = useTranslation();

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
          {t('Запомнить меня')}
        </label>
      </div>
    </RememberMeStyles>
  );
};

export default RememberMe;