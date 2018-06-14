const db = require('../../models');

module.exports = (req, res, next) => {
  db.contacts.findOrCreate({
    raw: true,
    where: {
      email: req.body.email
    }
  }).then(([contactDetails]) => {
    req.contactDetails = contactDetails;
    next();
  })
}
