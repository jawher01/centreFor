const classe = require("../models/Classe");
const formation=require("../models/Formation")


//ajouter un class
exports.PostClasse = async (req, res) => {
      try {
            const newClasse = new classe({ ...req.body });
            const response = await newClasse.save();
            res.send({ response: response, message: "classe is saved" });
      } catch (error) {
            res.status(404).send({ message: "can not save it" }, error);
      }
};

//GET all classes
exports.GetAllClasse = async (req, res) => {
      try {
            const result = await classe.find() .populate("formation").populate("user")
                
                
                 
            res.send({ response: result, message: "getting classe successfully" });
      } catch (error) {
            res.status(400).send({ message: "can not get formation" });
            console.log(error)
      }
};

//GET one classe
exports.GetOneClasse = async (req, res) => {
      try {
            const result = await classe.findOne({ _id: req.params.id }).populate("formation").populate("user")
            res.send({ response: result, message: "getting classe successfully" });
      } catch (error) {
            res.status(400).send({ message: "there is no classe with this id" });
      }
};

//delete one classe by id
exports.DeleteOneClasse = async (req, res) => {

      try {
            const result = await classe.deleteOne({ _id: req.params.id })
            result.n
                  ? res.send({ message: "classe deleted" })
                  : res.send({ message: "there is no classe with this id" });

      } catch (error) {
            res.status(400).send({ message: "there is no classe with this id" });
      }
};

//update a classe by id
exports.UpdateClasse = async (req, res) => {
      try {
            const result = await classe.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ?
                  res.send({ message: "classe updated", user: req.body }) :
                  res.send({ message: "classe already updated", user: req.body })
      } catch (error) {
            res.status(400).send({ message: "there is not classe with this id" });
      }
};