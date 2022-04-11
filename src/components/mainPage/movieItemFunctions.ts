import { IMovieData } from "@types";

export const getMovieData = (
  movieId: number,
  setMovieData: React.Dispatch<React.SetStateAction<IMovieData>>
): void => {
  fetch(
    (process.env.REACT_APP_GET_MOVIE_DATA ?? "") +
      movieId.toString() +
      "?api_key=" +
      (process.env.REACT_APP_API_KEY ?? "") +
      "&language=en-US"
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })
    .then((data) => {
      setMovieData({
        id: data.id,
        title: data.title,
        overview: data.overview,
        posterPath: data.poster_path,
      });
    });
};