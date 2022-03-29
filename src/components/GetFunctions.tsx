import { FC } from "react";
import { IGenreItem, IGetMoviesList } from "../types/types";

const GetMoviesList: FC<IGetMoviesList> = ({ year, rating, genres }) => {
  let filterUrlPart = "";
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
    .catch((data) => {
      return data[""];
    })
    .then((data) => {
      return data;
    });
  return null;
};

function GetGenresList(): Promise<IGenreItem[]> {
  return new Promise((resolve, reject) => {
    fetch(
      (process.env.REACT_APP_GET_GENRES ?? "") +
        (process.env.REACT_APP_API_KEY ?? "") +
        "&language=en-US"
    )
      .then((response) => {
        return response.json();
      })
      .catch((data) => {
        reject(data.genres[""]);
      })
      .then((data) => {
        resolve(
          data.genres.map(({ id, name }: { id: string; name: string }) => ({
            id,
            name,
            isFavorite: GetData("favoriteGenres").includes(name) ? true : false,
          }))
        );
      });
  });
}

interface IGetMovieData {
  movieId: number;
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

function GetMovieData(movieId: number): Promise<IGetMovieData> {
  return new Promise((resolve, reject) => {
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
      .catch((data) => {
        reject(data[""]);
      })
      .then((data) => {
        resolve(data);
      });
  });
}

const GetPoster = (posterPath: string) => {
  return (process.env.REACT_APP_GET_POSTER ?? "") + posterPath;
};

const LoadData = () => {
  const data = JSON.parse(localStorage.getItem("userData") || "{}");
  localStorage.setItem("favoriteGenres", JSON.stringify(data.favoriteGenres));
  localStorage.setItem("favoriteMovies", JSON.stringify(data.favoriteMovies));
  localStorage.setItem("login", JSON.stringify(data.login));
  localStorage.setItem("password", JSON.stringify(data.password));
};

const GetData = (param: string) => {
  const data = JSON.parse(localStorage.getItem(param) || "{}");
  return data;
};

export {
  GetGenresList,
  GetMoviesList,
  LoadData,
  GetData,
  GetMovieData,
  GetPoster,
};
