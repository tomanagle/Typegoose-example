import User from "../models/user.model";

async function CreateUser({
  email,
  firstName,
  lastName,
  gender,
  address,
}: any) {
  const user = await User.create({
    email,
    gender,
    firstName,
    lastName,
    address,
  });

  return user;
}

export default {
  CreateUser,
};
