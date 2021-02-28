import { CreateQuery } from "mongoose";
import PetModel, { Pet } from "../models/pet.model";

async function CreatePet(input: CreateQuery<Pet>): Promise<Pet> {
  const pet = await PetModel.create(input);

  return pet;
}

export default {
  CreatePet,
};
