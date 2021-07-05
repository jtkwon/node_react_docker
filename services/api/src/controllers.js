const controllers = {
  home: (req, res) => {
    res.status(200).send({ data: 'Home' });
  },
};

module.exports = controllers;
