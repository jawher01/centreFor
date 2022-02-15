const formation = require("../models/Formation");


//post a formation
exports.PostFormation = async (req, res) => {
      try {
            const newFormation = new formation({ ...req.body });
            const response = await newFormation.save();
            res.send({ response: response, message: "formation is saved" });
      } catch (error) {
            res.status(404).send({ message: "can not save it" }, error);
      }
    }

//GET all formation
exports.GetAllFormation = async (req, res) => {
      try {
            const result = await formation.find()
                  .populate("user")
            res.send({ response: result, message: "getting formation successfully" });
      } catch (error) {
            res.status(400).send({ message: "can not get formation" });
      }
};

//GET one formation
exports.GetOneFormation = async (req, res) => {
      try {
            const result = await formation.findOne({ _id: req.params.id }).populate("user")
            res.send({ response: result, message: "getting formation successfully" });
      } catch (error) {
            res.status(400).send({ message: "there is no formation with this id" });
      }
};

//delete one formation by id
exports.DeleteOneFormation = async (req, res) => {

      try {
            const result = await formation.deleteOne({ _id: req.params.id })
            result.n
                  ? res.send({ message: "formation deleted" })
                  : res.send({ message: "there is no formation with this id" });

      } catch (error) {
            res.status(400).send({ message: "there is no formation with this id" });
      }
};

//update a formation by id
exports.UpdateFormation = async (req, res) => {
      try {
            const result = await formation.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ?
                  res.send({ message: "formation updated", user: req.body }) :
                  res.send({ message: "formation already updated", user: req.body })
      } catch (error) {
            res.status(400).send({ message: "there is not formation with this id" });
      }
};

