import { FC } from "react";
import { Field } from "react-final-form";

import { ISingInInput } from "types";
import { SingInInputContainerStyles, SingInInputStyles } from "./signInStyles";

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
