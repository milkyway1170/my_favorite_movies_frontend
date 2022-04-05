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

const FailVerificationStyles = styled.h4<{ isActive: boolean }>`
  ${tw`bg-[#1976d2] text-white px-5 py-2 rounded-md shadow-xl mb-2`}
  ${(props) => (props.isActive ? [tw`hidden`] : [tw`block`])}
`;

const SingInInputStyles = styled.div`
  & {
    input {
      ${tw`border-gray-300 w-full h-10 border-solid border rounded px-2`}
    }
    div {
      ${tw`w-full flex flex-col justify-center items-start mb-2`}
    }
  }
`;

const BtnStyles = styled.div`
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

const MainPageStyles = styled.main`
  ${tw`bg-[#e2e8f0] w-full h-full pb-10 font-sans box-content`}
`;

const HeaderStyles = styled.header`
  ${tw`bg-[#1976d2] h-20 flex flex-row justify-center items-center `}
  & {
    h1 {
      ${tw`text-white text-5xl`}
    }
  }
`;

const GreetingStyles = styled.div`
  ${tw`
    bg-[#e2e8f0]
    flex flex-row justify-end items-center
    mt-4 mr-32  
    space-x-4 
  `}
  & {
    h2,
    button {
      ${tw`text-4xl font-semibold`}
    }
  }
`;

const LogoutStyles = styled.div`
  & {
    button {
      ${tw`underline hover:text-gray-400`}
    }
  }
`;

const GenresTagCloudStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
    `}
  & {
    div {
      ${tw`
      flex flex-row flex-wrap
      space-x-4
      `}
    }
    h2 {
      ${tw`text-3xl font-semibold`}
    }
  }
`;

const GenreItemStyles = styled.div<{ isFavorite: boolean }>`
  & {
    button {
      ${tw`
        rounded-xl
        p-2 my-2
        text-lg
        text-white
       `}
      ${(props) =>
        props.isFavorite
          ? "background-color: #1976d2"
          : "background-color: #35b8f2"}
    }
  }
`;

const MoviesBlockStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
    `}
  }
`;

const FirstStringStyles = styled.div`
  ${tw`
flex flex-row justify-between items-center
space-x-4
text-3xl font-semibold
`}
  & {
    div {
      ${tw`flex flex-row items-center space-x-4`}
    }
  }
`;

const ChangeViewStyles = styled.div`
  ${tw`space-x-4 flex flex-row justify-end`}
  & {
    img {
      ${tw`w-12 rounded-md p-1`}
    }
  }
`;

const MoviesListStyles = styled.ul<{ listView: boolean }>`
  ${tw`flex items-center flex-wrap`}
    ${(props) =>
      props.listView ? [tw`flex-col`] : [tw`flex-row justify-between`]}
  }
`;

const MovieItemStyles = styled.li<{ listView: boolean }>`
  ${tw`bg-[#9ad9f5] mt-4 rounded flex items-center mx-4 px-10 py-5`}
  & {
    h3 {
      ${tw`text-center font-semibold text-xl`}
    }
    p {
      ${tw`font-normal text-justify text-xl`}
    }
    img {
      ${(props) => (props.listView ? [tw`w-32 mx-5`] : [tw`w-48 my-2`])}
    }
    ${(props) =>
      props.listView
        ? [tw`flex-row`]
        : [tw`flex-col w-1/4 self-stretch content-between`]}
  }
`;

const MovieItemBtns = styled.div`
  ${tw`flex flex-row`}
  & {
    img {
      ${tw`w-12`}
    }
  }
`;

const SaveItButtonStyles = styled.div<{ isSave: boolean }>`
& {
  button{
    ${tw`
      text-white
      text-lg
      px-5 py-2 ml-5
      rounded-md
      shadow-xl
    `}
    ${(props) =>
      props.isSave ? "background-color: #1976d2" : "background-color: #35b8f2"}
}
`;

const SearchSettingsStyles = styled.div`
  ${tw`
  bg-[#43a2f0]
  mt-5 py-5 px-10 mx-20
  rounded-xl
  shadow-2xl`}
  & {
    h2 {
      ${tw`text-3xl font-semibold`}
    }
  }
`;

const SearchedGenresTagCloudStyles = styled.div`
  ${tw`bg-[#43a2f0]`}
  & {
    div {
      ${tw`
    flex flex-row flex-wrap
    space-x-4
    `}
    }
    h3 {
      ${tw`text-2xl font-semibold mr-2`}
    }
  }
`;

const ReleaseYearStyles = styled.div`
  ${tw`flex flex-row items-center mt-5`}
  & {
    h3 {
      ${tw`text-2xl font-semibold mr-5`}
    }
  }
`;

const RatingStyles = styled(ReleaseYearStyles)`
  & {
    span {
      ${tw`text-xl`}
    }
  }
`;

export {
  FirstStringStyles,
  RatingStyles,
  ReleaseYearStyles,
  SearchedGenresTagCloudStyles,
  SearchSettingsStyles,
  SaveItButtonStyles,
  FailVerificationStyles,
  SingInInputStyles,
  BtnStyles,
  GenreItemStyles,
  GenresTagCloudStyles,
  GreetingStyles,
  HeaderStyles,
  MovieItemStyles,
  MovieItemBtns,
  MainPageStyles,
  LogoutStyles,
  MoviesListStyles,
  MoviesBlockStyles,
  ChangeViewStyles,
};
export default FormStyles;
