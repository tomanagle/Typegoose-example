import { CreateQuery, FilterQuery } from "mongoose";
import PetModel, { Pet } from "../models/pet.model";

export async function createPet(input: CreateQuery<Pet>): Promise<Pet> {
  const pet = await PetModel.create(input);

  return pet;
}

export async function getPetGreeting(input: FilterQuery<Pet>): Promise<string> {
  const pet = await PetModel.findOne(input);

  return pet.greeting;
}
