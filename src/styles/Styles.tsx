import styled from "styled-components"
import tw from "twin.macro"

const FormStyles = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`${tw`bg-[#e2e8f0] w-full h-screen flex flex-col justify-center items-center`}
  & {
    img{
      ${tw`w-28 mb-4`}
    }
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow w-1/5`}
    }
    div {
      ${tw`w-full flex flex-row justify-between items-center mb-5`}
    }
  }
`

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

export { RememberMeStyles, SingInInputStyles };
export default FormStyles;
