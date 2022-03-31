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
  genres?: Array<string>;
}

export interface IGenreItem {
  name: string;
  id: string;
  isFavorite: boolean;
}

export interface IGenreItemProps {
  genreItem: IGenreItem;
  handleChangeGenreItem: (genreItem: IGenreItem) => void;
}

export interface IMovieData {
  id: string;
  title: string;
  overview: string;
  posterPath: string;
}

export interface IGetMovieData {
  movieId: number;
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export interface IFailVerification {
  isActive: boolean;
}

export interface ISwitch {
  status: boolean;
  handleChange: (status: boolean) => void;
}

export interface IDeleteButton {
  handleChange: () => void;
}

export interface IMovieItem {
  index: number;
  listView: boolean;
  movieId: number;
  handleDeleteItem: (id: string) => void;
}

export interface IMovieData {
  id: string;
  title: string;
  overview: string;
  posterPath: string;
}
