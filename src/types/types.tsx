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