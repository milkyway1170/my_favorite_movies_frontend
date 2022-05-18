import { ApolloQueryResult } from "@apollo/client";
import { ApolloError } from "@apollo/client/errors";

export interface ISingInInput {
  lableText: string;
  name: string;
  type: string;
  input?: string;
}

export interface ISignIn {
  login: string;
  password: string;
}

export interface IGetMoviesList {
  page?: number;
  year?: number;
  rating?: number;
  genres?: string[];
  setMoviesList: (moviesList: IMovieData[]) => void;
}

export interface IGenreItem {
  name: string;
  id: number;
}

export interface IGetGenresNames {
  favoriteGenresIdList: number[];
  genresList: IGenreItem[];
}

export interface IGenreItemProps {
  genreItem: IGenreItem;
  handleChangeGenreItem: (genreId: number, isFavorite: boolean) => void;
  isFavorite: boolean;
}

export interface IMovieData {
  id: number | null;
  title: string;
  overview: string;
  posterPath: string;
}

export interface ISearchedMovieData {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
}

export interface IGetMovieData extends IMovieData {
  movieId: number;
}

export interface IFailVerification {
  isActive: boolean;
}

export interface ISwitch {
  listView: boolean;
  handleChange: (listView: boolean) => void;
}

export interface IDeleteButton {
  handleChange: () => void;
  listView: boolean;
}

export interface IMovieItem {
  index: number;
  listView: boolean;
  movieId: number;
  isWatched: boolean;
  handleDeleteItem: (id: string) => void;
  handleChangeItemStatus: (id: string) => void;
}

export interface ISearchedMovieItem {
  listView: boolean;
  movieData: ISearchedMovieData;
}

export interface ISearchedMoviesList {
  moviesList: ISearchedMovieData[];
  listView: boolean;
}

export interface IReleaseYear {
  releaseYear: number;
  handleChange: (releaseYear: number) => void;
}

export interface ISaveItButton {
  movieId: number;
  isSave: boolean;
  handleChangeMovieItem: (movieId: number, isSave: boolean) => void;
}

export interface IRating {
  rating: number;
  setRating: (rating: number) => void;
}

export interface ISearchedGenresTagCloud {
  setFavoriteGenresIdList: (favoriteGenresIdList: number[]) => void;
  favoriteGenresIdList: number[];
}

export interface ISearchSettings {
  setMoviesList: (moviesList: ISearchedMovieData[]) => void;
}

export interface IMoviesList {
  listView: boolean;
}

export interface IApiMovieData extends IMovieData {
  poster_path: string;
}

export interface IDeleteOrInsertInArray {
  checkedArray: number[];
  checkedArrayItem: number;
}

export interface IErrorList {
  errorList: (ApolloError | undefined)[];
}

export interface ProtectedRouteProps {
  authenticationPath: string;
  outlet: JSX.Element;
}
