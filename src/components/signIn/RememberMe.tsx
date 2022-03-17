import React from 'react';
import { Field } from 'react-final-form'
import { useTranslation } from 'react-i18next';
import styled from "styled-components"
import tw from "twin.macro"

const RememberMeStyles = styled.main`
  & {
    div {
      ${tw`w-full flex flex-row justify-start items-center`}
    }
    input {
      ${tw`w-auto mr-2`}
    }
  }
`

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