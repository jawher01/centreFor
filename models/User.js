const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({

    nom:{
        required:true,
        type:String
    },
    prenom:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
    role:{
        required:true,
        type:String,
        enum:["admin","etudiant","proffeseur","admin superieur"],
    },
    img:{
       
        type:String,
    }
    //adresse
    //numtel
    //cv
    //niveau scolaire
    //formation
    //
    

},
{
    timestamps:true,
}


)

module.exports=mongoose.model("user",UserSchema);


