const Product = require("../models/product");
exports.createProduct = async (req, res) => {
  const product = new Product({ ...req.body, owner: req.user.id });
  await product.save();
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({ owner: req.user.id });
  res.json({
    message: "Success!!",
    products,
  });
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findOneAndUpdate(
    { _id: req.params.id, owner: req.user.id },
    req.body,
    { new: true }
  );
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({
    _id: req.params.id,
    owner: req.user.id,
  });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json({ message: "Product deleted" });
};
