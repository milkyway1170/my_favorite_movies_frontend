import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { SingInInputStyles } from '../styles/Styles';

import { ISingInInput } from '../types/types';

const SingInInput : FC <ISingInInput> = ({name, lableText}) => {
  
  return (
    <SingInInputStyles>
      <Field name ={name}> 
        {({ input }) => (
          <div>
            <label>{lableText}</label>  
            <input {...input} type="text" placeholder=""/>
          </div>
        )}
      </Field>
    </SingInInputStyles>
  );
};

export default SingInInput;