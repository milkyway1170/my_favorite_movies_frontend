import React, { FC } from 'react';
import { Field } from 'react-final-form';
import styled from "styled-components"
import tw from "twin.macro"

import { ISingInInput } from '../../types/types';

const SingInInputStyles = styled.main`
  & {
    input {
      ${tw`border-gray-300 w-full h-10 border-solid border rounded px-2`}
    }
    div {
      ${tw`w-full flex flex-col justify-center items-start mb-2`}
    }
  }
`

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