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
        enum:["modirateur","etudiant","proffeseur","admin superieur","editeur" ],

    },
    img:{ 
        type:String,
    },
    adresse:{ 
        type:String,
    },
    num_tel:{
        type:String,
    },
    cv:{
        type:String,
    },
    niveau_scolaire:{
       
        type:String,
    },
    salaire:{
        type:String,
    },
    formation:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "formation",
    }],
    publication:[{
        type: mongoose.Schema.Types.ObjectId,
            ref: "publication",
    }]
              
},
{
    timestamps:true,
}


)

module.exports=mongoose.model("user",UserSchema);


