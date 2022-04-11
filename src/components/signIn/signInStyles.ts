import styled from "styled-components";
import tw from "twin.macro";

export const SignInStyles = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  ${tw`bg-[#e2e8f0] w-full h-screen flex flex-col justify-center items-center`}
`;

export const SignInFormStyles = styled.form`
  ${tw`bg-white text-center rounded py-8 px-5 shadow w-1/5`}
`;

export const SignInImgStyles = styled.img`
  ${tw`w-28 mb-4`}
`;

export const SignInDivStyles = styled.div`
  ${tw`w-full flex flex-row justify-between items-center mb-5`}
`;

export const FailVerificationStyles = styled.h4<{ isActive: boolean }>`
  ${tw`bg-[#1976d2] text-white px-5 py-2 rounded-md shadow-xl mb-2`}
  ${(props) => (props.isActive ? [tw`hidden`] : [tw`block`])}
`;

export const SingInInputStyles = styled.input`
  ${tw`border-gray-300 w-full h-10 border-solid border rounded px-2`}
`;

export const SingInInputContainerStyles = styled.div`
  ${tw`w-full flex flex-col justify-center items-start mb-2`}
`;
