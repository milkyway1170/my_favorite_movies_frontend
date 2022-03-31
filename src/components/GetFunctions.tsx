import { FC } from "react";
import { IGenreItem, IGetMoviesList, IMovieData } from "../types/types";

const GetMoviesList = async (
  page?: number,
  year?: number,
  rating?: number,
  genres?: Array<string>
): Promise<any> => {
  let filterUrlPart = "";
  if (page) {
    filterUrlPart += "&page=" + page?.toString();
  }
  if (year) {
    filterUrlPart += "&primary_release_year=" + year?.toString();
  }
  if (rating) {
    filterUrlPart += "&vote_average.gte=" + rating?.toString();
  }
  if (genres) {
    filterUrlPart += "&with_genres=";
    genres.forEach((genre) => (filterUrlPart += genre + "%2C%20"));
  }
  const response = await fetch(
    (process.env.REACT_APP_GET_DISCOVER ?? "") +
      (process.env.REACT_APP_API_KEY ?? "") +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false" +
      filterUrlPart +
      "&with_watch_monetization_types=flatrate"
  );
  const data = await response.json();
  return data;
};

const GetGenresList = async (
  setGenresList: React.Dispatch<React.SetStateAction<IGenreItem[]>>
): Promise<any> => {
  const response = await fetch(
    (process.env.REACT_APP_GET_GENRES ?? "") +
      (process.env.REACT_APP_API_KEY ?? "") +
      "&language=en-US"
  );
  const data = await response.json();
  setGenresList(
    data.genres.map(({ id, name }: { id: string; name: string }) => ({
      id,
      name,
      isFavorite: getData("favoriteGenres").includes(name) ? true : false,
    }))
  );
};

const GetMovieData = async (
  movieId: number,
  setMovieData: React.Dispatch<React.SetStateAction<IMovieData>>
): Promise<any> => {
  const response = await fetch(
    (process.env.REACT_APP_GET_MOVIE_DATA ?? "") +
      movieId.toString() +
      "?api_key=" +
      (process.env.REACT_APP_API_KEY ?? "") +
      "&language=en-US"
  );
  const data = await response.json();
  setMovieData({
    id: data.id,
    title: data.title,
    overview: data.overview,
    posterPath: data.poster_path,
  });
};

const getPoster = (posterPath: string) => {
  return (process.env.REACT_APP_GET_POSTER ?? "") + posterPath;
};

const loadData = () => {
  const data = JSON.parse(localStorage.getItem("userData") || "{}");
  localStorage.setItem("favoriteGenres", JSON.stringify(data.favoriteGenres));
  localStorage.setItem("favoriteMovies", JSON.stringify(data.favoriteMovies));
  localStorage.setItem("login", JSON.stringify(data.login));
  localStorage.setItem("password", JSON.stringify(data.password));
};

const getData = (param: string) => {
  const data = JSON.parse(localStorage.getItem(param) || "{}");
  return data;
};

export {
  GetGenresList,
  GetMoviesList,
  loadData,
  getData,
  GetMovieData,
  getPoster,
};
