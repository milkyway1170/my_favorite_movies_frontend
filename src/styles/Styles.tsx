import styled from "styled-components";
import tw from "twin.macro";

const SignInStyles = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  ${tw`bg-[#e2e8f0] w-full h-screen flex flex-col justify-center items-center`}
`;

const SignInFormStyles = styled.form`
  ${tw`bg-white text-center rounded py-8 px-5 shadow w-1/5`}
`;

const SignInImgStyles = styled.img`
  ${tw`w-28 mb-4`}
`;

const SignInDivStyles = styled.div`
  ${tw`w-full flex flex-row justify-between items-center mb-5`}
`;

const FailVerificationStyles = styled.h4<{ isActive: boolean }>`
  ${tw`bg-[#1976d2] text-white px-5 py-2 rounded-md shadow-xl mb-2`}
  ${(props) => (props.isActive ? [tw`hidden`] : [tw`block`])}
`;

const SingInInputStyles = styled.input`
  ${tw`border-gray-300 w-full h-10 border-solid border rounded px-2`}
`;

const SingInInputContainerStyles = styled.div`
  ${tw`w-full flex flex-col justify-center items-start mb-2`}
`;

const BtnStyles = styled.button`
  ${tw`
    bg-[#1976d2]
    text-white
    text-lg
    px-5 py-2 
    rounded-md
    shadow-xl
  `}
`;

const SaveItButtonStyles = styled.button<{ isSave: boolean }>`
  ${tw`
    text-white
    text-lg
    px-5 py-2 ml-5
    rounded-md
    shadow-xl
  `}
  ${(props) =>
    props.isSave ? "background-color: #1976d2" : "background-color: #35b8f2"}
`;

const GenreItemSButtonStyles = styled.button<{ isFavorite: boolean }>`
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
`;

const MainPageStyles = styled.main`
  ${tw`bg-[#e2e8f0] w-full h-full pb-10 font-sans box-content`}
`;

const HeaderStyles = styled.header`
  ${tw`bg-[#1976d2] h-20 flex flex-row justify-center items-center `}
`;

const HeaderTextStyles = styled.h1`
  ${tw`text-white text-5xl`}
`;

const GreetingStyles = styled.div`
  ${tw`
    bg-[#e2e8f0]
    flex flex-row justify-end items-center
    mt-4 mr-32  
    space-x-4 
  `}
`;

const LogoutButtonStyles = styled.button`
  ${tw`text-4xl font-semibold underline hover:text-gray-400`}
`;

const TitleTextStyles = styled.h2`
  ${tw`text-3xl font-semibold`}
`;

const GreetingTextStyles = styled(TitleTextStyles)`
  ${tw`text-4xl`}
`;

const GenresTagCloudStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
  `}
`;

const TagsContainerStyles = styled.div`
  ${tw`flex flex-row flex-wrap space-x-4`}
`;

const MoviesBlockStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
  `}
`;

const MoviesBlockContainerStyles = styled.div`
  ${tw`
    flex flex-row justify-between items-center
    space-x-4
  `}
`;

const MoviesBlockButtonContainerStyles = styled.div`
  ${tw`flex flex-row items-center space-x-4`}
`;

const ChangeViewStyles = styled.div`
  ${tw`space-x-4 flex flex-row justify-end`}
`;

const ChangeViewImgStyles = styled.img`
  ${tw`w-12 rounded-md p-1`}
`;

const MoviesListStyles = styled.ul<{ listView: boolean }>`
  ${tw`flex items-center flex-wrap`}
  ${(props) =>
    props.listView ? [tw`flex-col`] : [tw`flex-row justify-between`]}
`;

const MovieItemStyles = styled.li<{ listView: boolean }>`
  ${tw`bg-[#9ad9f5] mt-4 rounded flex items-center mx-4 px-10 py-5`}
  ${(props) =>
    props.listView
      ? [tw`flex-row`]
      : [tw`flex-col w-1/4 self-stretch content-between`]}
`;

const MovieItemPosterImgStyles = styled.img<{ listView: boolean }>`
  ${(props) => (props.listView ? [tw`w-32 mx-5`] : [tw`w-48 my-2`])}
`;

const MovieItemTitleTextStyles = styled.h2`
  ${tw`text-center font-semibold text-xl`}
`;

const MovieItemTextStyles = styled.p`
  ${tw`font-normal text-justify text-xl`}
`;

const MovieItemBtns = styled.div`
  ${tw`flex flex-row ml-5`}
`;

const MovieItemButtonImgStyles = styled.img<{ listView: boolean }>`
  ${(props) => (props.listView ? [tw`w-32`] : [tw`w-12 mt-2`])}
`;

const SearchSettingsStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-5 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
  `}
`;

const SearchedGenresTagCloudStyles = styled.div`
  ${tw`bg-[#43a2f0]`}
`;

const SearchSettingsTextStyles = styled.h2`
  ${tw`text-2xl font-semibold mr-5`}
`;

const ReleaseYearStyles = styled.div`
  ${tw`flex flex-row items-center mt-5`}
`;

const RatingStyles = styled(ReleaseYearStyles)`
  & {
    span {
      ${tw`text-xl`}
    }
  }
`;

export {
  MoviesBlockButtonContainerStyles,
  SingInInputContainerStyles,
  MovieItemPosterImgStyles,
  MovieItemTitleTextStyles,
  MovieItemTextStyles,
  MovieItemButtonImgStyles,
  ChangeViewImgStyles,
  GreetingTextStyles,
  HeaderTextStyles,
  TagsContainerStyles,
  SearchSettingsTextStyles,
  TitleTextStyles,
  MoviesBlockContainerStyles,
  RatingStyles,
  ReleaseYearStyles,
  SearchedGenresTagCloudStyles,
  SearchSettingsStyles,
  SaveItButtonStyles,
  FailVerificationStyles,
  SingInInputStyles,
  BtnStyles,
  GenreItemSButtonStyles,
  GenresTagCloudStyles,
  GreetingStyles,
  HeaderStyles,
  MovieItemStyles,
  MovieItemBtns,
  MainPageStyles,
  LogoutButtonStyles,
  MoviesListStyles,
  MoviesBlockStyles,
  ChangeViewStyles,
  SignInImgStyles,
  SignInStyles,
  SignInFormStyles,
  SignInDivStyles,
};
export default SignInStyles;
