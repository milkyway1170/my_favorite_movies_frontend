export interface ISingInInput {
  lableText: string;
  name: string;
  input?: string;
}

export interface ISignIn {
  login: string;
  password: string;
  rememberMe?: boolean;
}

export interface IGetMoviesList {
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
