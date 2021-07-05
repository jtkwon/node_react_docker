const app = require('@jtkwon/base-server');
// internal
const routes = require('./routes')(app);

const PORT = process.env.PORT || 3000;

app.route("/", routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error has occurred while listening to port ${PORT}`);
  } else {
    console.log(`Listening to PORT: ${PORT}`);
  }
});
