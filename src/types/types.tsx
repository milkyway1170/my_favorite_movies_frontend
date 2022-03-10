export interface ISingInInput{
  lableText: string;
  name: string;
  input?:string
}

export interface ISignIn{
  login: string;
  password: string;
  rememberMe?: boolean;
}

export interface IGetMoviesList{
  year?: number;
  rating?: number; 
  genres?: Array<string>;
}
