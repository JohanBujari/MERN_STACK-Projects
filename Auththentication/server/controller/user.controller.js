const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const JWT_SECRET_KEY = "MyKey";

module.exports.signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (name.length < 3) {
    return res.status(400).json({ message1: "Name must be at least 3 chars" });
  }
  if (existingUser) {
    return res.status(400).json({ message2: "user already exists" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message3: "password must be at least 6 chars" });
  }

  const hashedPassoword = bcrypt.hashSync(password);

  User.create({
    name,
    email,
    password: hashedPassoword,
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};

module.exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({
      message: "It seems that no account has been registered with this email",
    });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect email/password" });
  }

  const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
    expiresIn: "1hr",
  });
  console.log(token);

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  });
  return res
    .status(200)
    .json({ message: "succesfully logged in", user: existingUser, token });
};

module.exports.verifyToken = (req, res, next) => {
  // Get the cookies and the authorization header from the request
  const cookies = req.headers.cookie;
  const headers = req.headers["authorization"];

  // Check if the authorization header is present and has the expected format
  if (!headers || !headers.startsWith("Bearer ")) {
    res.status(400).json({ message: "no token found" });
    return;
  }

  // Extract the token from the header
  const token = headers.split(" ")[1];

  // Check if the JWT_SECRET_KEY is defined and is a string
  if (
    !process.env.JWT_SECRET_KEY ||
    typeof process.env.JWT_SECRET_KEY !== "string"
  ) {
    res
      .status(500)
      .json({ message: "JWT_SECRET_KEY is not defined or invalid" });
    return;
  }

  // Verify the token using the secret key
  try {
    const user = jwt.verify(String(token), process.env.JWT_SECRET_KEY);
    req.user.id = user.id;
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
    return;
  }

  // Call the next middleware
  next();
};

module.exports.getUser = async (req, res, next) => {
  const userId = req.id;
  console.log("test2" + userId);
  let user;

  try {
    user = await User.findById(userId, " -password");
    console.log(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error finding user: " + error.message });
  }
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  return res.status(200).json({ user });
};
