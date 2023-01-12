const Authors = require("../models/author.model");

module.exports.createNewAuthor = (req, res) => {
  const { name } = req.body;

  Authors.create({
    name: name,
  })

    .then((author) => res.json(author))
    .catch((err) => res.json(err));
};

module.exports.getAllAuthors = (req, res) => {
  Authors.find({})
    .then((allAuthors) => {
      res.json({ authors: allAuthors });
      console.log(res);
    })
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.deleteAuthor = (req,res) => {
  Authors.deleteOne({_id: req.params.id})
  .then((deletedAuthor) => res.json(deletedAuthor))
    .catch((err) => res.json(err));
}

module.exports.getOneAuthor = (req, res) => {
  Authors.findOne({_id: req.params.id})
  .then((updatedAuthor => res.json(updatedAuthor)))
  .catch((err) => res.json(err));
}
module.exports.updateAuthor = (req, res) => {
  Authors.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.json(err));
};