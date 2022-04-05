const сheckUsersData = () => {
  if (!localStorage.getItem("usersData")) {
    const usersData = {
      admin: {
        password: "admin",
        favoriteGenres: ["Animation", "History"],
        favoriteMovies: [12, 13, 14],
      },
      "vladislav.bublik@kodep.ru": {
        password: "password",
        favoriteGenres: [12, 13],
        favoriteMovies: [],
      },
    };
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }
};

export default сheckUsersData;
