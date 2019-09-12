const go = require('../utils/crud');

exports.createUser = async (req, res) => {
  //   try {
  //     const response = await go.createOne('users', 'id', req.body);
  //     res
  //       .status(201)
  //       .json({ message: 'Account successfully created!', response });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(400).json({ message: "Couldn't create account", err });
  //   }
  go.createOne('users', 'id', req.body)
    .then(response =>
      res
        .status(201)
        .json({ message: 'Account successfully created!', response })
    )
    .catch(err => console.error(err));
};
