const evenement = require("../models/Evenement");


//post a evenement
exports.PostEvenement = async (req, res) => {
      try {
            const newEvenement = new evenement({ ...req.body });
            const response = await newEvenement.save();
            res.send({ response: response, message: "evenement is saved" });
      } catch (error) {
            res.status(404).send({ message: "can not save it" }, error);
      }
};

//GET all evenement
exports.GetAllEvenement= async (req, res) => {
      try {
            const result = await evenement.find()
            if(result){
            res.send({ response: result, message: "getting evenement successfully" });
            }else{
                res.status(403).send({message:"can not get evenement"})
            }
      } catch (error) {
            res.status(400).send({ message: "can not get evenement" });
      }
};

//GET one evenement
exports.GetOneEvenement = async (req, res) => {
      try {
            const result = await evenement.findOne({ _id: req.params.id })
            res.send({ response: result, message: "getting evenement successfully" });
      } catch (error) {
            res.status(400).send({ message: "there is no evenement with this id" });
      }
};

//delete one evenement by id
exports.DeleteOneEvenement= async (req, res) => {

      try {
            const result = await evenement.deleteOne({ _id: req.params.id })
            result.n
                  ? res.send({ message: "evenement deleted" })
                  : res.send({ message: "there is no evenement with this id" });

      } catch (error) {
            res.status(400).send({ message: "there is no evenement with this id" });
      }
};

//update a evenement by id
exports.UpdateEvenement = async (req, res) => {
      try {
            const result = await evenement.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ?
                  res.send({ message: "evenement updated", user: req.body }) :
                  res.send({ message: "evenement already updated", user: req.body })
      } catch (error) {
            res.status(400).send({ message: "there is not evenement with this id" });
      }
};

