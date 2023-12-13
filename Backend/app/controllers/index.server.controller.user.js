const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, "MASSOINCHOTELWEBAPP", { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const firstName = user.firstName;
    const lastName = user.lastName;
    const accountType = user.accountType;

    //create a token
    const token = createToken(user._id);
    res.status(200).json({ firstName, lastName, accountType, email, token });
  } catch (er) {
    res.status(400).json({ error: er.message });
  }
};

const signupUser = async (req, res) => {
  const { firstName, lastName, email, password, accountType } = req.body;

  try {
    const user = await User.signup(
      firstName,
      lastName,
      email,
      password,
      accountType
    );

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ firstName, lastName, email, accountType, token });
  } catch (er) {
    res.status(400).json({ error: er.message });
  }
};

//Get hotel by ID
const getUserInfo = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { loginUser, signupUser, getUserInfo };
