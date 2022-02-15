const mongoose=require("mongoose")

const EvenementSchema=new mongoose.Schema({
    
    nom:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    img:{
        type:String,
    }
},
{
    timestamps:true,
}


)

module.exports=mongoose.model("evenement",EvenementSchema);