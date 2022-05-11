import { gql } from "@apollo/client";

export const USER_INFO = gql`
  query {
    user {
      id
      login
    }
  }
`;

export const GET_GENRES_LIST = gql`
  query {
    getGenres {
      id
      name
    }
  }
`;

export const GET_FAVORITE_GENRES_LIST = gql`
  query {
    favoriteGenresList {
      genreId
    }
  }
`;

export const GET_MOVIE_DATA = gql`
  query getMovieData($movieId: String!) {
    getMovieData(movieId: $movieId) {
      id
      title
      overview
      poster_path
    }
  }
`;

export const GET_FAVORITE_MOVIES_LIST = gql`
  query {
    favoriteMoviesList {
      movieId
    }
  }
`;

export const GET_SEARCHING_MOVIES_LIST = gql`
  query searchingSettings(
    $page: Float!
    $year: Float!
    $rating: Float!
    $genres: [String!]!
  ) {
    getSearchingMoviesList(
      searchingSettings: {
        page: $page
        year: $year
        rating: $rating
        genres: $genres
      }
    ) {
      id
      title
      overview
      poster_path
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation signIn($login: String!, $password: String!) {
    signIn(userData: { login: $login, password: $password }) {
      token
    }
  }
`;

export const ADD_NEW_FAVORITE_GENRE = gql`
  mutation addFavoriteGenre($newFavoriteGenre: Float!) {
    addFavoriteGenre(newFavoriteGenre: $newFavoriteGenre) {
      id
    }
  }
`;

export const ADD_NEW_FAVORITE_MOVIE = gql`
  mutation addFavoriteMovie($newFavoriteMovie: Float!) {
    addFavoriteMovie(newFavoriteMovie: $newFavoriteMovie) {
      id
    }
  }
`;

export const REMOVE_FAVORITE_GENRE = gql`
  mutation removeFavoriteGenre($genreId: Float!) {
    removeFavoriteGenre(genreId: $genreId)
  }
`;

export const REMOVE_FAVORITE_MOVIE = gql`
  mutation removeFavoriteMovie($movieId: Float!) {
    removeFavoriteMovie(movieId: $movieId)
  }
`;
