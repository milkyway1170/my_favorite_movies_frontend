import { THE_OLDEST_RELEASE_YEAR } from "./const";

const getReleaseYearsList = () => {
  let releaseYearsList = [];
  for (
    let year = THE_OLDEST_RELEASE_YEAR;
    year <= new Date().getFullYear();
    year++
  ) {
    releaseYearsList.push(year);
  }
  return releaseYearsList;
};

export const releaseYearsList = getReleaseYearsList();
