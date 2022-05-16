import styled from "styled-components";
import tw from "twin.macro";

export const SaveItButtonStyles = styled.button<{ isSave: boolean }>`
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

export const SearchSettingsStyles = styled.div`
  ${tw`
    bg-[#43a2f0]
    mt-5 py-5 px-10 mx-20
    rounded-xl
    shadow-2xl
  `}
`;

export const SearchedGenresTagCloudStyles = styled.div`
  ${tw`bg-[#43a2f0]`}
`;

export const SearchSettingsText = styled.h2`
  ${tw`text-2xl font-semibold mr-5`}
`;

export const ReleaseYearStyles = styled.div`
  ${tw`flex flex-row items-center mt-5`}
`;

export const RatingStyles = styled(ReleaseYearStyles)`
  & {
    span {
      ${tw`text-xl`}
    }
  }
`;

export const SearchSettingsButtonContainerStyles = styled.div`
  ${tw`flex flex-row justify-between items-center h-14`}
`;
