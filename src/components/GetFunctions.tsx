import { FC } from "react";
import { IGetMoviesList } from "../types/types";

const GetMoviesList : FC <IGetMoviesList> = ({year, rating, genres}) => {
  let filterUrlPart = '';
  if(year){
    filterUrlPart += '&primary_release_year='+(year?.toString())
  }
  if(rating){
    filterUrlPart += '&vote_average.gte='+(rating?.toString())
  }
  if (genres){
    filterUrlPart += '&with_genres=';
    genres.forEach(genre => filterUrlPart += genre+'%2C%20')
  }
  fetch((process.env.REACT_APP_GET_DISCOVER??'')+(process.env.REACT_APP_API_KEY??'')+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'+filterUrlPart+'&with_watch_monetization_types=flatrate').then((response) => {
    return response.json();
  })
  .catch((data) => {
    return(data['']);
  })
  .then((data) => {
    console.log(data)
    return(data);
  });
  return null
};

const GetGenresList = () => {
  fetch((process.env.REACT_APP_GET_GENRES??'')+(process.env.REACT_APP_API_KEY??'')+'&language=en-US').then((response) => {
    return response.json();
  })
  .catch((data) => {
    return(data.genres['']);
  })
  .then((data) => {
    console.log(data.genres)
    return(data.genres);
  });
};

export { GetGenresList, GetMoviesList}