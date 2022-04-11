export const loadData = () => {
  const data = JSON.parse(localStorage.getItem("userData") || "{}");
  localStorage.setItem("favoriteGenres", JSON.stringify(data.favoriteGenres));
  localStorage.setItem("favoriteMovies", JSON.stringify(data.favoriteMovies));
  localStorage.setItem("login", JSON.stringify(data.login));
  localStorage.setItem("password", JSON.stringify(data.password));
};