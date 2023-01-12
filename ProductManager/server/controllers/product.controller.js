const Products = require("../models/product.model");

module.exports.createNewPoroduct = (req, res) => {
  Products.create(req.body)
    .then((newProduct) => {
      res.json({ product: newProduct });
    })
    .catch((err) => {
      res.json({ message: "Somethin went wrong", error: err });
    });
};

module.exports.getAllProducts = (req, res) => {
  Products.find({})
    .then((allProducts) => {
      res.json({ products: allProducts });
      // console.log(res);
      // console.log("im here")
    })
    .catch((err) => {
      res.json({ message: "something went wrong", error: err });
    });
};

module.exports.getOneProduct = (req, res) => {
  Products.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  Products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => res.json(deletedProduct))
    .catch((err) => res.json(err));
};


