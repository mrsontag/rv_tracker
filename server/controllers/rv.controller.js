const Rv = require("../models/rv.model");

module.exports.findAllRvs = (req, res) => {
  Rv.find()
    .then(allDaRvs => res.json( allDaRvs ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleRv = (req, res) => {
	Rv.findOne({ _id: req.params.id })
		.then(oneSingleRv => res.json( oneSingleRv ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewRv = (req, res) => {
  Rv.create(req.body)
    .then(newlyCreatedRv => res.json( newlyCreatedRv ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingRv = (req, res) => {
  Rv.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedRv => res.json( updatedRv ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingRv = (req, res) => {
  Rv.deleteOne({ _id: req.params.id })
    .then(result => res.json( result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
