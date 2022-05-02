import { IDeleteOrInsertInArray, IGenreItem } from "@types";

export const getGenresList = (
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
      setGenresList(data.genres.map((genreItem: IGenreItem) => genreItem));
    });
};

export const getPoster = (posterPath: string | undefined) => {
  return (process.env.REACT_APP_GET_POSTER ?? "") + posterPath;
};

export const getData = (param: string) => {
  const data = JSON.parse(localStorage.getItem(param) || "{}");
  return data;
};

export const deleteOrInsertInArray = ({
  checkedArray,
  checkedArrayItem,
}: IDeleteOrInsertInArray): number[] => {
  let resultList: number[] = [];
  resultList =
    checkedArray.indexOf(checkedArrayItem) >= 0
      ? checkedArray.filter(
          (arrayItem: number) => arrayItem !== checkedArrayItem
        )
      : [...checkedArray, checkedArrayItem];
  return resultList;
};
