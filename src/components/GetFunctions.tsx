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
          }))
        );
      });
  });
}

const GetUserData = () => {
  const data = JSON.parse(localStorage.getItem("userData") || "{}");
  return data;
};

export { GetGenresList, GetMoviesList, GetUserData };
