const aliases = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@styles': `${prefix}/styles/styles`,
  '@utils': `${prefix}/utils`,
  '@types': `${prefix}/types`,
  '@AddFavoriteMovies': `${prefix}/components/addFavoriteMovies/AddFavoriteMovies`,
  '@SignIn': `${prefix}/components/signIn/SignIn`,
  '@MainPage': `${prefix}/components/mainPage/MainPage`,
  '@signInStyles': `${prefix}/components/signIn/signInStyles`,
});

module.exports = aliases;