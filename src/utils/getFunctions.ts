import { IDeleteOrInsertInArray } from "types";

export const getPoster = (posterPath: string | undefined) => {
  return (process.env.REACT_APP_GET_POSTER ?? "") + posterPath;
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
