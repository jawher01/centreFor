const mongoose=require("mongoose")

const FormationSchema=new mongoose.Schema({
    
    nom:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    duree:{  
        type:String, 
    },
    prix:{ 
        type:String,
    },
    date_debut:{
        type:String,
    },
    date_fin:{
        type:String,
    },
    user:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    } ] ,
   //type accelerer
},
{
    timestamps:true,
}


)

module.exports=mongoose.model("formation",FormationSchema);
