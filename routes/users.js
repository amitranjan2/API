const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find().sort({ _id : -1 })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const postname = req.body.postname;
  const title = req.body.title;
  const photo = req.body.photo;

  const newUser = new User({
    postname,title,photo

    // date,
  });

  // const newUser = new User({username},{user});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
