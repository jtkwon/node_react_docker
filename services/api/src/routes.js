const { home } = require('./controllers');

const routes = (app) => {
  app.get('/', home);
};

module.exports = routes;
