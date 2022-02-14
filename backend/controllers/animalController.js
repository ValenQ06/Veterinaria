import animal from "../models/animal.js";

const registerAnimal = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.race ||
    !req.body.weight ||
    !req.body.height ||
    !req.body.Health ||
    !req.body.age
  )
    return res.status(400).send({ message: "Incomplete data" });

  let schema = new animal({
    name: req.body.name,
    race: req.body.race,
    weight: req.body.weight,
    height: req.body.height,
    Health: req.body.Health,
    age: req.body.age,
    animalStatus: true,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register role" });

  res.status(200).send({ result });
};

export default { registerAnimal };
