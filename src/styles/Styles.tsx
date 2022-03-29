import styled from "styled-components";
import tw from "twin.macro";

const FormStyles = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  ${tw`bg-[#e2e8f0] w-full h-screen flex flex-col justify-center items-center`}
  & {
    img {
      ${tw`w-28 mb-4`}
    }
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow w-1/5`}
    }
    div {
      ${tw`w-full flex flex-row justify-between items-center mb-5`}
    }
  }
`;

const BtnStyles = styled.main`
  & {
    button{
      ${tw`
        bg-[#1976d2]
        text-white
        text-lg
        px-5 py-2 
        rounded-md
        shadow-xl
      `}
  }
`;

export { BtnStyles };
export default FormStyles;
