const Comment = require("../models/comment");
const Publication = require("../models/Publication");
const User = require("../models/User");

exports.Postcomment = async (req, res) => {
      try {
            const idPub = req.params.idPub;
            const publication = await Publication.findById(idPub);
            const user = await User.findOne({ email: req.body.email });
            const comment = new Comment({ content: req.body.content, user: user._id });
            await comment.save();
            publication.comments.push(comment._id.toString());
            publication.save();
            res.status(200).send({ publication, user, comment });
            
            return;
      } catch (error) {
           res.status(404).send({ message: "can not save it" }, error);
          
          
      }
};

