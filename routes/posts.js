const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    User.findOne({_id: req.user})
        .then(doc => res.json({
            _id: doc._id,
            email: doc.email
        }))
})

module.exports = router;