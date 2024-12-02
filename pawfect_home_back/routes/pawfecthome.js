import express from "express";
import { Pet } from "../models/pets.js";

const router = express.Router();


//Fetching all pets
router.route("/").get((req, res) => {
    Pet.find()
      .then((pets) => res.json(pets))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//Editing a pet
router.route("/edit/:id").put((req, res)=>{

  Pet.findOne({petId: req.params.id})
  .then((pet)=>{
    pet.name = req.body.name;
    pet.picture = req.body.picture;
    pet.age = req.body.age;
    pet.breed = req.body.breed;
    pet.location = req.body.location;
    pet.gender = req.body.gender;
    pet.type = req.body.type;

    pet
    .save()
    .then(()=> res.json("Pet has been updated"))
    .catch((err) => res.status(400).json("Error: " + err));


  })
  .catch((error)=>{
    console.error(error);
    res.status(500).json({error: 'Error updating pet'})
  })
  
})

//Deleting a pet
router.route("/delete/:id").delete((req,res)=>{
  Pet.findOneAndDelete({petId: req.params.id})
    .then(()=> res.json("Pet has been deleted"))
    .catch((err)=> res.status(400).json({error: 'Error deleing pet'}))
})

//Add a pet
router.route("/add").post((req, res)=>{
  const petId = req.body.petId;
  //const picture = req.body.picture;
  const name = req.body.name;
  const age = req.body.age;
  const location = req.body.location;
  const breed = req.body.breed;
  const gender = req.body.gender;
  const type = req.body.type;

  const newPet = new Pet({
    petId,
    //picture, 
    name,
    age, 
    location,
    breed,
    gender,
    type
  });

  newPet.save()
  .then(()=> res.json("Pet has been added!"))
  .catch((error) => res.status(400).json({error: 'Something went wrong. Please try again'}))




})

export default router;