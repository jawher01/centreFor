const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PubSchema = new schema({
    nom: {
        type: String,
    },
    titre: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        }
    ],
   //like
});

module.exports = mongoose.model("publication", PubSchema);