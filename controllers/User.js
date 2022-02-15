const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.register = async (req, res) => {
  const { nom, prenom, email, password,role } = req.body;
  try {
    const newUser = new User({ nom, prenom, email, password,role });

    //   check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }
    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
   
    newUser.password = hashedPassword;

    // save the user
    const newUserToken = await newUser.save();
    // generate a token
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user is saved",
      token: ` Bearer ${token}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not save the user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //   find if the user exist
    const searchedUser = await User.findOne({ email });
    // if thhe email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // password are equals
    const match = await bcrypt.compare(password, searchedUser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // generate a token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: ` Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not get the user" });
  }
};

exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
};


exports.DeleteOneUser= async (req, res) => {

  try {
        const result = await User.deleteOne({ _id: req.params.id })
        result.n
              ? res.send({ message: "user deleted" })
              : res.send({ message: "there is no user with this id" });

  } catch (error) {
        res.status(400).send({ message: "there is no user with this id" });
  }
};






