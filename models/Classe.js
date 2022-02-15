const mongoose=require("mongoose")

const ClasseSchema=new mongoose.Schema({
    
    nom:{
        required:true,
        type:String
    },
    duree:{
        type:String,
    },
    calendrier:{
        type:String,
    },
    formation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "formation",
    }  ,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
   

},
{
    timestamps:true,
}


)

module.exports=mongoose.model("classe",ClasseSchema);
