import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { GetMovieData, GetPoster } from "../../GetFunctions";
import { CheckButton } from "./CheckButton";
import { DeleteButton } from "./DeleteButton";

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
  & {
    img {
      ${tw`w-12`}
    }
  }
`;

interface IMovieItem {
  index: number;
  listView: boolean;
  movieId?: number;
  handleDeleteItem: (id: string) => void;
}

interface IMovieData {
  id: string;
  title: string;
  overview: string;
  posterPath: string;
}

export const MovieItem: FC<IMovieItem> = (props) => {
  const [movieData, setMovieData] = useState<IMovieData>({
    id: "",
    title: "",
    overview: "",
    posterPath: "",
  });
  const [isCheck, setIsCheck] = useState<boolean>(false);

  useEffect(() => {
    if (props.movieId) {
      GetMovieData(props.movieId)
        .then((data) =>
          setMovieData({
            id: data.id,
            title: data.title,
            overview: data.overview,
            posterPath: data.poster_path,
          })
        )
        .catch((data) => console.error(data));
    }
  }, []);

  const handleDeleteButton = () => {
    if (movieData.id) {
      return props.handleDeleteItem(movieData.id);
    }
  };

  if (!movieData || typeof movieData === "undefined") return null;
  return (
    <MovieItemStyles listView={props.listView}>
      <h3>{props.index.toString() + ". " + movieData.title}</h3>
      <img src={GetPoster(movieData.posterPath)} alt="" />
      <p>{movieData.overview}</p>
      <MovieItemBtns>
        <CheckButton
          handleChange={(status: boolean) => setIsCheck(status)}
          status={isCheck}
        />
        <DeleteButton handleChange={() => handleDeleteButton()} />
      </MovieItemBtns>
    </MovieItemStyles>
  );
};
