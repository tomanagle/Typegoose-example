import {
  prop,
  getModelForClass,
  Ref,
  modelOptions,
  index,
} from "@typegoose/typegoose";
import { User } from "./user.model";

@modelOptions({ schemaOptions: { collection: "pet", timestamps: true } })
@index({ name: 1 })
export class Pet {
  @prop({ type: () => String })
  public name: string;

  @prop({ type: () => String })
  public type: string;

  // A reference to another document
  @prop({ type: () => User })
  public owner: Ref<User>;

  // A virtual type
  public get greeting() {
    return `Hi! I am ${this.name} the ${this.type}.`;
  }
}

const PetModel = getModelForClass(Pet);

export default PetModel;
