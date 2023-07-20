const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static Signup Method

userSchema.statics.signup = async function (email, password) {
  // Validation

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(`The password must contain a minimum of 8 characters.
It must include at least 1 alphabet (a-z or A-Z).
It must include at least 1 number (0-9).`);
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
