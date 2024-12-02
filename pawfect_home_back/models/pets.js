import mongoose from "mongoose";

const petSchema = new mongoose.Schema({

    petId:{
        type:Number
    },
    picture:{
        type:String
    },
    name:{
        type:String
    },
    age:{
        type:Number
    },
    location:{
        type:String
    },
    breed:{
        type:String
    },
    gender:{
        type:String
    },
    type:{
        type:String
    }

})

export const Pet = mongoose.model("Pet", petSchema);