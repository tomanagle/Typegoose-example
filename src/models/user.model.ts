import { prop, getModelForClass } from "@typegoose/typegoose";

enum Gender {
  male = "male",
  female = "female",
  undisclosed = "undisclosed",
}

class Address {
  @prop({ type: () => String })
  street: string;

  @prop({ type: () => String })
  city: string;

  @prop({ type: () => String })
  postCode: string;
}

export class User {
  // Mongoose validation goes inside the @Props arguments
  @prop({ type: () => String, required: true, unique: true })
  email: string;

  @prop({ type: () => String, required: true })
  firstName: string;

  @prop({ type: () => String, required: true })
  lastName: string;

  // Enum of values male, female or undisclosed
  @prop({ type: () => String, enum: Object.values(Gender) })
  gender: string;

  // Embedded sub doccument
  @prop({ type: () => Address })
  address: Address;

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
