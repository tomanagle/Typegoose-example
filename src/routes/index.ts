import { TRoutesInput } from "../types/routes";
import { createUser } from "../controllers/user.controller";
import { createPet, getPetGreeting } from "../controllers/pet.controller";

export default ({ app }: TRoutesInput) => {
  app.post("/api/user", async (req, res) => {
    const user = await createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });

    const pet = await createPet({
      owner: user._id,
      name: req.body.petName,
      type: "Cat",
    });

    return res.send({ user, pet });
  });

  app.get("/api/pet/greeting", async (req, res) => {
    const greeting = await getPetGreeting({
      _id: req.body.id,
    });

    return res.send(greeting);
  });
};
