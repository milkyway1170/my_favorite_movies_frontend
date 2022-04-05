import { FC } from "react";

import { IGenreItem, IGetMoviesList, IMovieData } from "../types/types";

const getMoviesList: FC<IGetMoviesList> = (props) => {
  let filterUrlPart = "";
  if (props.page) {
    filterUrlPart += "&page=" + props.page?.toString();
  }
  if (props.year) {
    filterUrlPart += "&primary_release_year=" + props.year?.toString();
  }
  if (props.rating) {
    filterUrlPart += "&vote_average.gte=" + props.rating?.toString();
  }
  if (props.genres) {
    filterUrlPart += "&with_genres=";
    props.genres.forEach((genre) => (filterUrlPart += genre + "%2C%20"));
  }
  fetch(
    (process.env.REACT_APP_GET_DISCOVER ?? "") +
      (process.env.REACT_APP_API_KEY ?? "") +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false" +
      filterUrlPart +
      "&with_watch_monetization_types=flatrate"
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })
    .then((data) =>{
      props.setMoviesList(
      data.results.map((
        { id, title, overview, poster_path}: { id: string; title: string; overview: string; poster_path:string }
        ) => ({ id, title, overview, poster_path,})))
    });
  return null;
};

const getGenresList = (
  setGenresList: React.Dispatch<React.SetStateAction<IGenreItem[]>>
) => {
  fetch(
    (process.env.REACT_APP_GET_GENRES ?? "") +
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
      setGenresList(
        data.genres.map(({ id, name }: { id: string; name: string }) => ({
          id,
          name
        }))
      );
    });
};

const getMovieData = (
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
        poster_path: data.poster_path,
      });
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
  getGenresList,
  getMoviesList,
  loadData,
  getData,
  getMovieData,
  getPoster,
};
