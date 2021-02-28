import User from "../models/user.model";

export async function createUser({
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
