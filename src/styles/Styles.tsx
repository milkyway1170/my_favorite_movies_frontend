import styled from "styled-components";
import tw from "twin.macro";

export const GenreItemSButtonStyles = styled.button<{ isFavorite: boolean }>`
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

export const MainPageStyles = styled.main`
  ${tw`bg-[#e2e8f0] w-full h-full pb-10 font-sans box-content`}
`;

export const HeaderStyles = styled.header`
  ${tw`bg-[#1976d2] h-20 flex flex-row justify-center items-center `}
`;

export const HeaderTextStyles = styled.h1`
  ${tw`text-white text-5xl`}
`;

export const TitleTextStyles = styled.h2`
  ${tw`text-3xl font-semibold`}
`;

export const GenresTagCloudStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
  `}
`;

export const TagsContainerStyles = styled.div`
  ${tw`flex flex-row flex-wrap space-x-4`}
`;

export const MoviesBlockStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-4 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
  `}
`;

export const ChangeViewStyles = styled.div`
  ${tw`space-x-4 flex flex-row justify-end`}
`;

export const ChangeViewImgStyles = styled.img<{ listView: boolean }>`
  ${tw`w-12 rounded-md p-1`}
  ${(props) =>
    props.listView
      ? [tw`border-solid border-white border-2`]
      : [tw`border-none`]}
`;

export const MoviesListStyles = styled.ul<{ listView: boolean }>`
  ${tw`flex items-center flex-wrap`}
  ${(props) =>
    props.listView ? [tw`flex-col`] : [tw`flex-row justify-between`]}
`;

export const MovieItemStyles = styled.li<{ listView: boolean }>`
  ${tw`bg-[#9ad9f5] mt-4 rounded flex items-center mx-4 px-10 py-5`}
  ${(props) =>
    props.listView
      ? [tw`flex-row`]
      : [tw`flex-col w-1/4 self-stretch content-between`]}
`;

export const MovieItemPosterImgStyles = styled.img<{ listView: boolean }>`
  ${(props) => (props.listView ? [tw`w-32 mx-5`] : [tw`w-48 my-2`])}
`;

export const MovieItemTitleTextStyles = styled.h2`
  ${tw`text-center font-semibold text-xl`}
`;

export const MovieItemTextStyles = styled.p`
  ${tw`font-normal text-justify text-xl`}
`;

export const MovieItemBtns = styled.div`
  ${tw`flex flex-row ml-5`}
`;

export const MovieItemButtonImgStyles = styled.img<{ listView: boolean }>`
  ${(props) => (props.listView ? [tw`w-32`] : [tw`w-12 mt-2`])}
`;

export const BtnStyles = styled.button`
  ${tw`
    bg-[#1976d2]
    text-white
    text-lg
    px-5 py-2 
    rounded-md
    shadow-xl
  `}
`;

export const ErrorStyles = styled.div`
  ${tw`
    bg-red-500
    text-white
    text-lg
    text-center
    mx-5 my-2
    px-5 py-2 
    rounded-md
    shadow-xl
`}
`;

export const LoadingStyles = styled(ErrorStyles)`
  ${tw`
    bg-[#1976d2]
`}
`;
