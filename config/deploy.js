/* eslint-env node */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    git: {
      repo: 'git@github.com:kpfefferle/liquid-fire-reveal.git'
    }
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
