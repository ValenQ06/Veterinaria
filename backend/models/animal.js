import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
  name: String,
  race: String,
  weight: Number,
  height: Number,
  Health: String,
  age: Number,
  animalStatus: Boolean,
  registerDate: { type: Date, default: Date.now },
});

const animal = mongoose.model("animals", animalSchema);
export default animal;
