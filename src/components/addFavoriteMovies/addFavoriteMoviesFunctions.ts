import { IApiMovieData, IGenreItem, IGetGenresNames, IGetMoviesList } from "@types";
import { THE_OLDEST_RELEASE_YEAR } from "./const";

export const getGenresNames = ({favoriteGenresIdList, genresList}:IGetGenresNames) =>{
  const result = genresList.filter((genreItem:IGenreItem) => {
    return favoriteGenresIdList.indexOf(genreItem.id) !== -1;
  });
  return result.map((genreItem:IGenreItem)=> genreItem.name)
}; 

export const getMoviesList = ({year, page, rating, genres, setMoviesList}:IGetMoviesList) => {
  let filterUrlPart = "";
  if (page) {
    filterUrlPart += "&page=" + page.toString();
  }
  if (year) {
    filterUrlPart += "&primary_release_year=" + year.toString();
  }
  if (rating) {
    filterUrlPart += "&vote_average.gte=" + rating.toString();
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
    .catch((error) => {
      console.log(error);
    })
    .then((data) =>{
      setMoviesList(
      data.results.map((data:IApiMovieData) => (
        { id: data.id,
          title: data.title,
          overview: data.overview,
          posterPath: data.poster_path,})))
        });
        return null;
};

const getReleaseYearsList = () => {
  let releaseYearsList  = [];
  for ( let year = THE_OLDEST_RELEASE_YEAR; year <= new Date().getFullYear(); year++){
    releaseYearsList.push(year);
  }
  return releaseYearsList;
};

export const releaseYearsList = getReleaseYearsList()

