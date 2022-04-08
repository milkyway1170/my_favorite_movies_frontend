import { FC } from "react";
import { Field } from "react-final-form";

import { SingInInputContainerStyles, SingInInputStyles } from "styles/styles";
import { ISingInInput } from "types";

const SingInInput: FC<ISingInInput> = ({ name, lableText }) => {
  return (
    <Field name={name}>
      {({ input }) => (
        <SingInInputContainerStyles>
          <label>{lableText}</label>
          <SingInInputStyles {...input} type="text" placeholder="" />
        </SingInInputContainerStyles>
      )}
    </Field>
  );
};

export default SingInInput;
