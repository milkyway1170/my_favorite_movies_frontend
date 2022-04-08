

import { THE_OLDEST_RELEASE_YEAR } from "components/addFavoriteMovies/const";
import { IApiMovieData, ICheckAndChange, IGenreItem, IGetGenresNames, IGetMoviesList, IMovieData } from "types";

const getMoviesList = ({year, page, rating, genres, setMoviesList}:IGetMoviesList) => {
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
        data.genres.map((genreItem:IGenreItem) => (genreItem))
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
        posterPath: data.poster_path,
      });
    });
};

const getPoster = (posterPath: string |undefined) => {
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

const getReleaseYearsList = () => {
  let releaseYearsList  = [];
  for (
    let year = THE_OLDEST_RELEASE_YEAR;
    year <= new Date().getFullYear();
    year++
  ){
    releaseYearsList.push(year);
  }
  return releaseYearsList;
};

const checkAndChange  = ({checkedArray, checkedArrayItem}:ICheckAndChange): number[] =>{
  let resultList: number[] = [];
  checkedArray.indexOf(checkedArrayItem) >= 0
    ? (resultList = checkedArray.filter(
        (arrayItem: number ) => arrayItem !== checkedArrayItem
      ))
    : (resultList = [...checkedArray, checkedArrayItem]);
  return resultList;
}

const getGenresNames = ({favoriteGenresIdList, genresList}:IGetGenresNames) =>{
    const result = genresList.filter((genreItem:IGenreItem) => {
      return favoriteGenresIdList.indexOf(genreItem.id) !== -1;
    });
    return result.map((genreItem:IGenreItem)=> genreItem.name)
}; 

export {
  getGenresNames,
  checkAndChange,
  getGenresList,
  getMoviesList,
  loadData,
  getData,
  getMovieData,
  getPoster,
  getReleaseYearsList,
};
