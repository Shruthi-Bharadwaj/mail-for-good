const db = require('../../models');

module.exports = (req, res) => {
  const tags = req.body.tags.map((tag) => {
    return {
      contactId: req.contactDetails.id,
      name: tag.name
    }
  });
  db.tags.bulkCreate(tags).then(() => {
    res.json({message: 'SUCCESS'});
  }).catch((err) => {
    res.status(400).json(err);
  });
}
