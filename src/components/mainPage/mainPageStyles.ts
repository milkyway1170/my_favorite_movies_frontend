import { TitleTextStyles } from "styles/Styles";
import styled from "styled-components";

import tw from "twin.macro";

export const GreetingStyles = styled.div`
  ${tw`
    bg-[#e2e8f0]
    flex flex-row justify-end items-center
    mt-4 mr-32  
    space-x-4 
  `}
`;

export const LogoutButtonStyles = styled.button`
  ${tw`text-4xl font-semibold underline hover:text-gray-400`}
`;

export const GreetingTextStyles = styled(TitleTextStyles)`
  ${tw`text-4xl`}
`;

export const MoviesBlockContainerStyles = styled.div`
  ${tw`
    flex flex-row justify-between items-center
    space-x-4
  `}
`;

export const MoviesBlockButtonContainerStyles = styled.div`
  ${tw`flex flex-row items-center space-x-4`}
`;
