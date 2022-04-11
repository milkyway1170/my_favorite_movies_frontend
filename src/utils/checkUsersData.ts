const сheckUsersData = () => {
  if (!localStorage.getItem("usersData")) {
    const usersData = {
      admin: {
        password: "admin",
        favoriteGenres: [16, 35],
        favoriteMovies: [12, 13, 14],
      },
      "vladislav.bublik@kodep.ru": {
        password: "password",
        favoriteGenres: [],
        favoriteMovies: [],
      },
    };
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }
};

export  { сheckUsersData };
