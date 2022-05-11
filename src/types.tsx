export interface ISingInInput {
  lableText: string;
  name: string;
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
  handleChangeGenreItem: (genreItem: IGenreItem) => void;
  favoriteGenresIdList: number[];
}

export interface IMovieData {
  id: number | null;
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
  handleDeleteItem: (id: string) => void;
}

export interface ISearchedMovieItem {
  listView: boolean;
  movieData: IMovieData;
}

export interface ISearchedMoviesList {
  moviesList: IMovieData[];
  listView: boolean;
}

export interface IReleaseYear {
  releaseYear: number;
  handleChange: (releaseYear: number) => void;
}

export interface ISaveItButton {
  movieId: number | null;
}

export interface IRating {
  rating: number;
  setRating: (rating: number) => void;
}

export interface ISearchedGenresTagCloud {
  genresList: IGenreItem[];
  setFavoriteGenresIdList: (favoriteGenresIdList: number[]) => void;
  favoriteGenresIdList: number[];
}

export interface ISearchSettings {
  setMoviesList: (moviesList: IMovieData[]) => void;
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
