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
  setMoviesList: (moviesList: IMovieData[]) => void;
}

export interface IGenreItem {
  name: string;
  id: string;
}

export interface IGenreItemProps {
  genreItem: IGenreItem;
  handleChangeGenreItem: (genreItem: IGenreItem) => void;
}

export interface IMovieData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface IGetMovieData extends IMovieData {
  movieId: number;
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

export interface ISearchedMovieItem {
  index: number;
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
  movieId: number;
}

export interface IRating {
  rating: number;
  setRating: (rating: number) => void;
}
