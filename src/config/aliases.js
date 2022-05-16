const aliases = (prefix = `src`) => ({
  '@addFavoriteMovies': `${prefix}/components/addFavoriteMovies`,
  '@signIn': `${prefix}/components/signIn`,
  '@mainPage': `${prefix}/components/mainPage`,
  '@config': `${prefix}/config`,
  '@styles': `${prefix}/styles/Styles`,
  '@utils': `${prefix}/utils`,
  '@types': `${prefix}/types`,
  '@signInStyles': `${prefix}/components/signIn/signInStyles`,
});

module.exports = aliases;