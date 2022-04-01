const сheckUsersData = () => {
  if (!localStorage.getItem("usersData")) {
    const usersData = {
      admin: {
        password: "admin",
        favoriteGenres: ["Animation", "History"],
        favoriteMovies: ["Spider-Man: No Way Home", "The Batman"],
      },
      "vladislav.bublik@kodep.ru": {
        password: "password",
        favoriteGenres: ["Mystery", "War"],
        favoriteMovies: [],
      },
    };
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }
};

export default сheckUsersData;
