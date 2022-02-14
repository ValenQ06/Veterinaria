import express from "express";

import animalController from "../controllers/animalController.js";

const router = express.Router();

//http://localhost:3001/api/animal/registerAnimal
router.post("/registerAnimal", animalController.registerAnimal);

export default router;
