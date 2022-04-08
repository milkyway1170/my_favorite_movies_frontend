const aliases = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
  '@types': `${prefix}/types`,
});

module.exports = aliases;