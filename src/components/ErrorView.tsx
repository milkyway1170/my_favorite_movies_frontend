import { ApolloError } from "@apollo/client";
import { FC } from "react";

import { ErrorStyles } from "styles/Styles";
import { IErrorList } from "types";

export const ErrorView: FC<IErrorList> = ({ errorList }) => {
  const result = errorList.map((errorItem: ApolloError | undefined) => {
    if (errorItem) {
      return <p>{errorItem.message}</p>;
    }
  });

  return <ErrorStyles>{result}</ErrorStyles>;
};
