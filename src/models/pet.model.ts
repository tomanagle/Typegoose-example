import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./user.model";

export class Pet {
  // Take
  @prop()
  public name: string;

  // A reference to another document
  @prop({ type: () => User })
  public owner: Ref<User>;
}

const PetModel = getModelForClass(Pet);

export default PetModel;
