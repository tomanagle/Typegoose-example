import { CreateQuery } from "mongoose";
import PetModel, { Pet } from "../models/pet.model";

export function createPet(input: CreateQuery<Pet>) {
  return PetModel.create(input);
}
